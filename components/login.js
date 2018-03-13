import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import { postCall } from '../services/api';
import { login } from '../services/api';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signin = this.signin.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }


    signin() {
        alert('A name was submitted: ' + this.state);
        login(this.state)
            .then((response) => {
                console.log('response ::::::::: ', response);
            })
            .catch((error) => {
                console.log('error ::::::: ', error);
            })
        alert('ollo');


    }
    render() {
        return (
            <div className="container">
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <div className="text-center"><h3>Sign In</h3></div>
                        <form>
                            <Form >
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input placeholder="email" type="email" id="email" name="email" onChange={this.handleEmailChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>password</Label>
                                    <Input placeholder="password" type="password" id="password" name="password" onChange={this.handlePasswordChange} />
                                </FormGroup>
                                <div className="text-center"> <button onClick={this.signin}>Sign in</button></div>
                            </Form>
                        </form>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </div>

        )
    }
}
