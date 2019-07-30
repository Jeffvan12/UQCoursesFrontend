import React from "react"
import './ProgramSearchItem.css'
import Textarea from 'react-textarea-autosize';


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
        this.setState({inputvalue:evt.target.value.trim()});
    }

    handleClick(){
        this.props.handleProgramUrlChange(this.state.inputvalue)
    }

    handleEnter(e){
        if (e.keyCode === 13){
            this.props.handleProgramUrlChange(this.state.inputvalue)
        }
    }


    render() {
        return (
            <div className="ProgramSearchContainer">
                <Textarea  onKeyDown={e => this.handleEnter(e)} onChange={evt => this.handleType(evt)} placeholder={"Input Program URL"} >
                </Textarea>
                <button onClick={this.handleClick}>Get Courses</button>
            </div>
        );
    }
}

export default ProgramSearchItem