import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import axios from 'axios';
const data = new FormData();
export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            type: this.props.imagetype,
            user_id: this.props.userid
        }
        this.upload = this.upload.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        // const data = new FormData();
    }
   
    handleFileChange(event) {
        // event.preventDefault();
        // let reader = new FileReader();
        // let filename = event.target.files[0];
        // reader.onloadend = () => {
        //     this.setState({
        //         file: filename
        //     });
        // }
        // reader.readAsDataURL(file)
      
        data.delete('file');
        data.delete('type');
        data.delete('user_id');
        data.append('file', event.target.files[0]);
        data.append('type', this.props.imagetype);
        data.append('user_id', this.props.userid);
        // axios.post('http://52.41.54.41:3001/common/imageUpload', data)
        // .then((response) => {
        //     console.log('response ::::::::: ', response);
        // })
        // .catch((error) => {
        //     console.log('error ::::::: ', error);
        // })

    }

    upload() {

        axios.post('http://52.41.54.41:3001/common/imageUpload', data)
            .then((response) => {
                console.log('response ::::::::: ', response);
                if(response.status==200)
                {
                    if(this.state.type=='fundraiserProfile')
                    {
                        this.prof=response.data.image_url;
                    localStorage.setItem('ProfileImage',this.prof);
                    }
                    else{
                        this.logo=response.data.image_url;
                    localStorage.setItem('Logo',this.logo);
                    }
                }
            })
            .catch((error) => {
                console.log('error ::::::: ', error);
            })


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