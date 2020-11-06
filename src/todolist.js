import React,{Component} from "react";
import './App.css';

class ToDoList extends React.Component{
    state={checked:false}


    handleChange=()=>{
        this.setState((state)=>({checked:!state.checked}))

    }

    render(){

        const strike={textDecoration:"line-through",fontStyle:"italic"}

        return(<div className="list">
            <input type="checkbox" checked={this.state.checked} id={this.props.id} onChange={this.handleChange} className="checkbox"/>
            {this.state.checked ? <label for={this.props.id} style={strike}>{this.props.task}</label> : <label for={this.props.id} >{this.props.task}</label>} 
            <hr/>
        </div>)

    }


}

export default ToDoList;