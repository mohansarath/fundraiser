import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import Center from '../services/center';
import { postCall } from '../services/api';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            fundraiser_type: '',
            phone: '',
            organization_name: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleFtypeChange = this.handleFtypeChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleOnameChange = this.handleOnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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


    handleSubmit(event) {
        // alert('A name was submitted: ' + JSON.stringify(this.state));
        postCall(JSON.stringify(this.state))
        .then((response) => { console.log('response ', response); })
        .catch((error) => console.log('error ', error)
    );
    // event.preventDefault();
}
render() {
    return (
        <div className="container">
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <div className="text-center"><h3>Sign Up</h3></div>
                    <form onSubmit={this.handleSubmit}>
                    <Form >
                        <FormGroup>
                            <Label>Email</Label>
                            <Input placeholder="email" type="email" id="email" name="email" onChange={this.handleEmailChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>password</Label>
                            <Input placeholder="password" type="password" id="password" name="password" onChange={this.handlePasswordChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>confirm password</Label>
                            <Input placeholder="confirm password" type="password" id="confirm_password" name="confirm_password" onChange={this.handleConfirmPasswordChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>fundraiser_type</Label>
                            <Input placeholder="fundraiser_type" id="fundraiser_type" name="fundraiser_type" onChange={this.handleFtypeChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>phone</Label>
                            <Input placeholder="phone" type="number" id="phone" name="phone" onChange={this.handlePhoneChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>organization_name</Label>
                            <Input placeholder="organization_name" id="organization_name" name="organization_name" onChange={this.handleOnameChange} />
                        </FormGroup>
                        <div className="text-center"> <input type="submit" value="Submit" /></div>
                    </Form>
                    </form>
                </Col>
                <Col xs="3"></Col>
            </Row>
        </div>

    )
}
}
