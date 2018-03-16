import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/loginpage';
import User from './pages/user';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import viewProfile from './pages/viewprofilepage';
import createProfile from './pages/createprofilepage'
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
                              <Route
                                path="/user"
                                component={User}
                            />
                              <Route
                                path="/view"
                                component={viewProfile}
                            />
                               <Route
                                path="/create"
                                component={createProfile}
                            />
                       
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>

        );
    }
}

