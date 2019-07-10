import React from "react"
import './ProgramSearchItem.css'


class ProgramSearchItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            course : this.props.item,
            inputvalue : "",
        }
        this.handleType = this.handleType.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleType(evt){
        this.setState({inputvalue:evt.target.value});
    }

    handleClick(){
        this.props.handleChange(this.state.inputvalue)
    }

    handleEnter(e){
        if (e.keyCode === 13){
            this.props.handleChange(this.state.inputvalue)
        }
    }


    render() {
        return (
            <div className="ProgramSearchContainer">
                <input  onKeyDown={e => this.handleEnter(e)} onChange={evt => this.handleType(evt)} placeholder={"Input Program URL"} />
                <button onClick={this.handleClick}>Get Courses</button>
            </div>
        );
    }
}

export default ProgramSearchItem