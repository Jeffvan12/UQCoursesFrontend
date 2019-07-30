import React from "react"
import './CourseItem.css'


class CourseItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            course : this.props.item,
            colour : this.props.colour,
            mousein : false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    handleClick(){
        // console.log(this.state.course.url);
        console.log(this.state.course);
    }

    handleEnter(){
        this.setState({mousein:true})
    }
    handleLeave(){
        this.setState({mousein:false})
    }

    render() {

        const style = {
            backgroundColor : this.state.colour,
        }

        return (
           // <div onClick={()=>window.open(this.state.course.url, "_blank")} className="CourseContainer">
            <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="CourseContainer" style={style}>
                <a href={this.state.course.url} >{this.state.course.title}</a>
                    <div>
                        <p>{"Semesters: " + this.state.course.semesters}</p>
                        <p>{"Prerequisites: " + (this.state.course.prereq === "No Value" ? "None" : this.state.course.prereq)}</p>
                        {this.state.mousein && <p>{this.state.course.summary}</p>}
                    </div>
            </div>
        );
    }
}

export default CourseItem
