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
    
    // constructor(props){
    //     super(props);
    //     this.loggedIn = this.loggedIn.bind(this);
    //     this.requireAuth = this.requireAuth.bind(this);
    // }
    // loggedIn() {
    //    this.data=JSON.parse(localStorage.getItem('Userdata'));
    //    if(this.data)
    //     return true;
    //     else return false;
    //   }
    // requireAuth(nextState, replace) {
    //     if (!loggedIn()) {
    //       replace({
    //         pathname: '/login'
    //       })
    //     }
    //   }
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
                                // onEnter={this.requireAuth}
                            />
                              <Route
                                path="/view"
                                component={viewProfile}
                                // onEnter={this.requireAuth}
                            />
                               <Route
                                path="/create"
                                component={createProfile}
                                // onEnter={this.requireAuth}
                            />
                       
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>

        );
    }
}

