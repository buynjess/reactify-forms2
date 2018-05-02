import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Notepad from './notepad'
import Routing from './routing'

export default class extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <Notepad/>
                <Notepad/>
                <Routing/>
            </MuiThemeProvider>

        );
    }
}