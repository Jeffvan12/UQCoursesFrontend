import React from "react"
import './CourseItem.css'


class CourseItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            course : this.props.item,
            colour : this.props.colour,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // console.log(this.state.course.url);
        console.log(this.state.course);
    }

    render() {

        const style = {
            backgroundColor : this.state.colour,
        }

        return (
           // <div onClick={()=>window.open(this.state.course.url, "_blank")} className="CourseContainer">
            <div className="CourseContainer" style={style}>
                <a href={this.state.course.url} >{this.state.course.title}</a>
                <p>{"Semesters: " + this.state.course.semesters}</p>
                <p>{"Prerequisites: " + this.state.course.prereq}</p>
            </div>
        );
    }
}

export default CourseItem
