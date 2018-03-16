import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';


export default class extends Component {

    constructor(props) {
        super(props);
        this.state={
            file : '',
            type :'',
            user_id :''
        }
        // this.upload = this.upload.bind(this);
        // this.handleFileChange = this.handleFileChange.bind(this);
    }

    upload(){

      
        
    }
    render() {
        return (
            <Row>
                <Col sm="3">
                </Col>
                <Col sm="6">
                    Select image
                    <TextField
                        type="file"
                        fullWidth={true}
                        onChange={this.handleFileChange}
                    />
                    <RaisedButton
                        type="button"
                        label="Upload"
                        primary={true}
                        onClick={this.upload}
                        className="right"
                    />

                </Col>
                <Col sm="3">
                </Col>
            </Row>
        )
    }
}