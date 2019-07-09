import React from "react"
import './CourseItem.css'
import randomColor from 'randomcolor'
import CourseItem from './CourseItem'


class CourseHolderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasloaded: false,
            programurlentered: false,
            courses: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const programurl = this.props.programurl
        const url = "http://0.0.0.0:4000/";

        async function getprogramcourses() {
            const result = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    courseUrl: programurl,
                }),
            });
            return await result.text();
        }

        if (this.props.programurl !== prevProps.programurl) {
            this.setState({programurlentered: true})
            this.setState({hasloaded: false})



            getprogramcourses().then(res => {

                //TODO Check if the server has returned a course list or an error
                try {
                    const response = JSON.parse(res);

                    const courses = response.Courses;
                    courses.sort((a, b) => (a.course_id > b.course_id) ? 1 : -1)

                    let coursecodes = courses.map(item => item.course_id.slice(0, 4));
                    coursecodes = Array.from(new Set(coursecodes))

                    const randomcolors = randomColor({luminosity: 'light', count: coursecodes.length})


                    let changer = true;
                    let temp = {}
                    for (let i = 0; i < coursecodes.length; i++) {
                        temp[coursecodes[i]] = randomcolors[i]
                        // temp[coursecodes[i]] = changer ? '#99deff' : '#8dc5ff' ;
                        // changer = !changer;
                    }


                    const coursesitems = courses.map(item => <CourseItem key={item.url} item={item}
                                                                         colour={temp[item.course_id.slice(0, 4)]}/>);

                    this.setState({courses: coursesitems});


                } catch{
                    this.setState({courses:<h1>{res}</h1>})
                }
                this.setState({hasloaded: true})
            })
        }
    }


    render() {
        return (
            <div className="CoursesContainer">
                {this.state.programurlentered ? (this.state.hasloaded ? this.state.courses :
                    <h1>Loading Courses. This could be a minute if there are a lot of courses</h1>) :
                    <h1>Please enter a Program URL</h1>}
            </div>
        )
    }
}

export default CourseHolderItem