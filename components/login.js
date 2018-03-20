import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import { postCall } from '../services/api';
import { loginfunc } from '../services/api';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import User from '../pages/user.js';
import validator from 'validator';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signin = this.signin.bind(this);
        // localStorage.clear();
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    clearError() {
        this.setState({
            emailError: '',
            passwordError: ''
        })
    }
    handleValidation() {
        var errorflag = 0;
        if (!validator.isEmail(this.state.email)) {
            errorflag=1;
            this.setState({ emailError: 'Email format not correct' })
        }
        if (!validator.isLength(this.state.password, { min: 6 })) {
            errorflag = 1;
            this.setState({ passwordError: 'Minimum characters is 6' });
        }
        if (errorflag == 1)
            return false;
        else if (errorflag == 0)
            return true;
    }
    signin() {
        // alert('A name was submitted: ' + this.props);
        this.clearError();
        if (this.handleValidation()) {
            postCall('fundraisers/login', this.state)
                .then((response) => {
                    console.log('response ::::::::: ', response);
                    if (response.status == 200) {

                        // alert(response.status);
                        console.log('props :::::::::::::::login', this.props);
                        this.autho = response.headers.auth;
                        localStorage.setItem('Auth', this.autho);
                        this.useremail = response.data.user_data.email;
                        this.userid = response.data.user_data.id;
                        //      localStorage.setItem('Userdata',JSON.stringify( this.userdata))
                        localStorage.setItem('Useremail', JSON.stringify(this.useremail))

                        localStorage.setItem('Userid', JSON.stringify(this.userid))



                        this.props.history.push({
                            pathname: '/user'
                            // state: { detail: response.data }
                        })
                        // const { history } = this.props;
                        // history.push("/");   
                    }    //   window.location="http://localhost:8080/user";
                })
                .catch((error) => {
                    console.log('error ::::::: ', error);
                })
        }

    }
    render() {
        return (
            <div className="container">
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6" className="border">
                        <div className="text-center">
                            <h3>Sign In</h3>

                            <Form >
                                <FormGroup>
                                    <TextField
                                        hintText="Email"
                                        floatingLabelText="email"
                                        onChange={this.handleEmailChange}
                                        errorText={this.state.emailError}
                                    />
                                    {/* <Label>Email</Label>
                                <Input placeholder="email" type="email" id="email" name="email" /> */}
                                </FormGroup>
                                <FormGroup>
                                    <TextField
                                        hintText="password"
                                        floatingLabelText="Password"
                                        type="password"
                                        onChange={this.handlePasswordChange}
                                        errorText={this.state.passwordError}

                                    />
                                    {/* <Label>password</Label>
                                <Input placeholder="password" type="password" id="password" name="password" onChange={this.handlePasswordChange} /> */}
                                </FormGroup>
                                <RaisedButton
                                    type="button"
                                    label="Sign In"
                                    primary={true}
                                    onClick={this.signin}
                                />
                                {/* <button type="button" onClick={this.signin}>Sign in</button> */}
                            </Form>
                        </div>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </div>
        )
    }
}
export default withRouter(login);
