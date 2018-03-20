import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import { postCall } from '../services/api';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            fundraiser_type: '',
            phone: '',
            organization_name: '',
            emailError: '',
            passwordError: '',
            confirm_passwordError: '',
            fundraiser_typeError: '',
            phoneError: '',
            organization_nameError: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleFtypeChange = this.handleFtypeChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleOnameChange = this.handleOnameChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleConfirmPasswordChange(event) {
        this.setState({ confirm_password: event.target.value });
    }
    handleFtypeChange(event) {
        this.setState({ fundraiser_type: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleOnameChange(event) {
        this.setState({ organization_name: event.target.value });
    }

    handleValidation() {
        var errorflag = 0;
        if (!validator.isEmail(this.state.email)) {
            errorflag = 1;
            this.setState({ emailError: 'Email not in valid form' });
        }
        if(!validator.isLength(this.state.password,{min:6}))
        {
            errorflag = 1;
            this.setState({ passwordError: 'Minimum characters is 6' });
        }
        if(!validator.equals(this.state.password,this.state.confirm_password))
        {
            errorflag=1;
            this.setState({confirm_passwordError:'Passwords not matching'})
        }
        if(!validator.isNumeric(this.state.phone))
        {
            errorflag=1;
            this.setState({phoneError:'Mobile should be numeric'})
           
        }
        if(!validator.isLength(this.state.phone,{min:10,max:10}))
        {
            errorflag=1;
            this.setState({phoneError:'Length should be 10'})
        }
        if(!validator.equals(this.state.fundraiser_type,'O') ) 
        {
            errorflag=1;
            this.setState({fundraiser_typeError:'Should be  O'})
        }
        if(validator.isEmpty(this.state.organization_name))
        {
            errorflag=1;
            this.setState({organization_nameError:'Should not be empty'})
        }
        if (errorflag == 1)
            return false;
        else if (errorflag == 0)
            return true;

    }
    clearError(){
        this.setState({
            organization_nameError:'',
            emailError:'',
            passwordError:'',
            confirm_passwordError:'',
            phoneError:'',
            fundraiser_typeError:'',
            organization_nameError:''
        })
    }
    signup() {
        this.clearError();
        if (this.handleValidation()) {
            alert('A name was submitted: ' + this.state);
            postCall('fundraisers/', this.state)
                .then((response) => {
                    console.log('response ::::::::: ', response.data);
                    this.props.history.push('/login');
                })
                .catch((error) => {
                    console.log('error ::::::: ', error);
                })
            alert('ollo');
        }

    }
    render() {
        return (
            <div className="container">
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6" className="border">
                        <div className="text-center"><h3>Sign Up</h3>
                            <Form >
                                <FormGroup>
                                    <TextField
                                        hintText="abc@xyz.com"
                                        floatingLabelText="Email"
                                        onChange={this.handleEmailChange}
                                        fullWidth={true}
                                        errorText={this.state.emailError}
                                    />
                              
                                    {/* <Label>Email</Label>
                                    <Input placeholder="email" type="email" id="email" name="email" onChange={this.handleEmailChange} /> */}
                                </FormGroup>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="password"
                                                floatingLabelText="Password"
                                                type="password"
                                                onChange={this.handlePasswordChange}
                                                fullWidth={true}
                                                errorText={this.state.passwordError}
                                            />
                                            {/* <Label>password</Label>
                                    <Input placeholder="password" type="password" id="password" name="password" onChange={this.handlePasswordChange} /> */}

                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="password"
                                                floatingLabelText="Confirm Password"
                                                type="password"
                                                onChange={this.handleConfirmPasswordChange}
                                                fullWidth={true}
                                                errorText={this.state.confirm_passwordError}
                                            />
                                            {/* <Label>confirm password</Label>
                                    <Input placeholder="confirm password" type="password" id="confirm_password" name="confirm_password" onChange={this.handleConfirmPasswordChange} /> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <TextField
                                        hintText="mobile"
                                        floatingLabelText="phone"
                                        onChange={this.handlePhoneChange}
                                        fullWidth={true}
                                        errorText={this.state.phoneError}
                                    />
                                    {/* <Label>fundraiser_type</Label>
                                    <Input placeholder="fundraiser_type" id="fundraiser_type" name="fundraiser_type" onChange={this.handleFtypeChange} /> */}
                                </FormGroup>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="O / I"
                                                floatingLabelText="Fundraiser Type"
                                                onChange={this.handleFtypeChange}
                                                fullWidth={true}
                                                errorText={this.state.fundraiser_typeError}
                                            />
                                            {/* <Label>phone</Label>
                                    <Input placeholder="phone" type="number" id="phone" name="phone" onChange={this.handlePhoneChange} /> */}
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="organization name"
                                                floatingLabelText="Organization name"
                                                onChange={this.handleOnameChange}
                                                fullWidth={true}
                                                errorText={this.state.organization_nameError}
                                            />
                                            {/* <Label>organization_name</Label>
                                    <Input placeholder="organization_name" id="organization_name" name="organization_name" onChange={this.handleOnameChange} /> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <RaisedButton
                                    type="button"
                                    label="Sign Up"
                                    primary={true}
                                    onClick={this.signup}
                                />
                                {/* <button type="button" onClick={this.signup}>Sign uP</button> */}
                            </Form>

                        </div>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </div>

        )
    }
}
