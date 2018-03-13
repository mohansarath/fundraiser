import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/loginpage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
;
// import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <BrowserRouter>
                <div>
                
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/login"
                        component={Login}
                    />
                </div>
            </BrowserRouter>
            </MuiThemeProvider>

        );
    }
}

