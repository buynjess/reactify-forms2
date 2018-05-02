import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import './notepad.css'

export default class extends Component{
    render(){
        return(
            <div className="flexBoxContainer">
                <Paper>Hello world</Paper>
                <Paper>Hello world!!</Paper>
                <Paper>More paper</Paper>
                <Paper>Stuff and Things</Paper>
            </div>
        );
    }
}