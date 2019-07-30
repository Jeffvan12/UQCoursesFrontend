import React from 'react';
import './App.css';
import ProgramSearchItem from './components/ProgramSearchItem'
import CourseHolderItem from './components/CourseHolderItem'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            hasloaded: false,
            courses: [],
            programurl: "https://my.uq.edu.au/programs-courses/plan_display.html?acad_plan=ENGLIX2000",
        }

        this.handleProgramUrlChange = this.handleProgramUrlChange.bind(this)
    }

    handleProgramUrlChange(url){
        this.setState({programurl:url})
    }



    render() {
        return (
            <div className="App">
                    <ProgramSearchItem handleProgramUrlChange={this.handleProgramUrlChange}/>
                    <CourseHolderItem programurl={this.state.programurl}/>
            </div>
        );
    }
}


export default App;
