import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
// import Center from '../services/center';
export default class extends Component {

    // constructor() {
    //     super();
    //     this.state = {};
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     for (let name of data.keys()) {
    //         const input = Form.elements[name];
    //         const parserName = input.dataset.parse;
    //         console.log('parser name is', parserName);
    //         if (parserName) {
    //             const parsedValue = inputParsers[parserName](data.get(name))
    //             data.set(name, parsedValue);
    //         }
    //     }
    //     this.setState({
    //         res: stringifyFormData(data)
    //     });
    //     fetch('http://52.41.54.41:3001/fundraisers/', {
    //         method: 'POST',
    //         body: res,
    //     });
    }
    render() {
        // const { res } = this.state;
        return (
            <div className="container">
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <div className="text-center"><h3>Sign Up</h3></div>
                        {/* <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input placeholder="email" type="email" id="email" name="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label>password</Label>
                                <Input placeholder="password" type="password" id="password" name="password" />
                            </FormGroup>
                            <FormGroup>
                                <Label>confirm password</Label>
                                <Input placeholder="confirm password" type="password" id="confirm_password" name="confirm_password" />
                            </FormGroup>
                            <FormGroup>
                                <Label>fundraiser_type</Label>
                                <Input placeholder="fundraiser_type" id="fundraiser_type" name="fundraiser_type" />
                            </FormGroup>
                            <FormGroup>
                                <Label>phone</Label>
                                <Input placeholder="phone" type="number" id="phone" name="phone" />
                            </FormGroup>
                            <FormGroup>
                                <Label>organization_name</Label>
                                <Input placeholder="organization_name" id="organization_name" name="organization_name" />
                            </FormGroup>
                            <div className="text-center"><Button color="primary">Sign Up</Button>{' '}</div>
                        </Form> */}

                        <form name="blog_post" className="form-horizontal">
                            <div id="blog_post">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
                                    <div className="col-sm-10">
                                        <input type="text"
                                            id="blog_post_title"
                                            required="required"
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Body</label>
                                    <div className="col-sm-10">
                                        <input type="text"
                                            id="blog_post_body"
                                            required="required"
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-10">
                                        <button type="submit"
                                            id="blog_post_submit"
                                            className="btn-default btn">
                                            Submit
                                </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </div>

        )
    }
}
// function stringifyFormData(fd) {
//     const data = {};
//     for (let key of fd.keys()) {
//         data[key] = fd.get(key);
//     }
//     return JSON.stringify(data, null, 2);
// }