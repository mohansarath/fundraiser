import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { putCall } from '../services/api';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { withRouter } from 'react-router-dom';
import Upload from './upload'

class update extends Component {

    componentWillMount() {
        this.state.first_name = this.props.details.user_data.first_name;
        this.state.last_name = this.props.details.user_data.last_name;
        this.state.street = this.props.details.user_data.street;
        this.state.city = this.props.details.user_data.city;
        this.state.country_code = this.props.details.user_data.country_code;
        this.state.zip = this.props.details.user_data.zip;
        this.state.phone = this.props.details.user_data.phone;
        this.state.facebook_link = this.props.details.user_data.facebook_link;
        this.state.twitter_link = this.props.details.user_data.twitter_link;
        this.state.google_link = this.props.details.user_data.google_link;
        this.state.organization_name = this.props.details.user_data.organization_name;

    }

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            street: '',
            city: '',
            state: '',
            country_code: '',
            zip: '',
            dob: '',
            facebook_link: '',
            twitter_link: '',
            google_link: '',
            phone: '',
            organization_name: '',
            profile_image_url: '',
            fundraiser_logo_url: '',
            fundraiser_type: this.props.details.user_data.fundraiser_type,
            email: this.props.details.user_data.email,
            modal1: false,
            modal2: false
        };
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCountryCodeChange = this.handleCountryCodeChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleFacebookChange = this.handleFacebookChange.bind(this);
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
        this.handleGoogleChange = this.handleGoogleChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleOrgNameChange = this.handleOrgNameChange.bind(this);
        this.update = this.update.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);


    };
    handleFirstnameChange(event) {
        this.setState({ first_name: event.target.value });
    }
    handleLastNameChange(event) {
        this.setState({ last_name: event.target.value });
    }
    handleStreetChange(event) {
        this.setState({ street: event.target.value });
    }
    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }
    handleStateChange(event) {
        this.setState({ state: event.target.value });
    }
    handleCountryCodeChange(event) {
        this.setState({ country_code: event.target.value });
    }
    handleZipChange(event) {
        this.setState({ zip: event.target.value });
    }
    handleDobChange(event, date) {
        // this.setState({ dob: date });
        this.setState({ dob: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() });
    }
    handleFacebookChange(event) {
        this.setState({ facebook_link: event.target.value });
    }
    handleTwitterChange(event) {
        this.setState({ twitter_link: event.target.value });
    }
    handleGoogleChange(event) {
        this.setState({ google_link: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleOrgNameChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleOrgNameChange(event) {
        this.setState({ organization_name: event.target.value });
    }

    update() {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        var url = 'fundraisers/' + this.props.details.user_data.id;
        putCall(url, this.state)
            .then((response) => {
                console.log('response ::::::::: ', response);
            })
            .catch((error) => {
                console.log('error ::::::: ', error);
            })
        alert('ollo');
    }
    toggle1() {
        this.setState({
            modal1: !this.state.modal1
        });
    }
    toggle2() {
        this.setState({
            modal2: !this.state.modal2
        });
    }

    render() {
        return (
            <div className="container">
                <div className="text-center"><h3>Update Profile</h3></div>
                <Row>

                    <Col xs="6" className="border">
                        <div className="text-center">
                            <Form >
                                <Row>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="firstname"
                                                floatingLabelText="First Name"
                                                onChange={this.handleFirstnameChange}
                                                fullWidth={true}
                                                value={this.state.first_name}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="lastname"
                                                floatingLabelText="Last name"
                                                onChange={this.handleLastNameChange}
                                                fullWidth={true}
                                                value={this.state.last_name}

                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="street"
                                                floatingLabelText="Street"
                                                onChange={this.handleStreetChange}
                                                fullWidth={true}
                                                value={this.state.street}

                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="city"
                                                floatingLabelText="City"
                                                onChange={this.handleCityChange}
                                                fullWidth={true}
                                                value={this.state.city}

                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="4">
                                        <FormGroup>
                                            <TextField
                                                hintText="Zip"
                                                floatingLabelText="Zip code"
                                                onChange={this.handleZipChange}
                                                fullWidth={true}
                                                value={this.state.zip}

                                            />
                                        </FormGroup>

                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <TextField
                                                hintText="country code"
                                                floatingLabelText="Country Code"
                                                onChange={this.handleCountryCodeChange}
                                                fullWidth={true}
                                                value={this.state.country_code}

                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <TextField
                                                hintText="phone"
                                                floatingLabelText="Phone"
                                                onChange={this.handlePhoneChange}
                                                fullWidth={true}
                                                value={this.state.phone}

                                            />
                                        </FormGroup>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm="6">
                                        <FormGroup>
                                            <DatePicker
                                                hintText="dob"
                                                floatingLabelText="Date of birth"
                                                onChange={this.handleDobChange}
                                                fullWidth={true}
                                                openToYearSelection={true}
                                                locale="en-US"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="organization name"
                                                floatingLabelText="organization name"
                                                onChange={this.handleOrgNameChange}
                                                fullWidth={true}
                                                value={this.state.organization_name}

                                            />
                                        </FormGroup>

                                    </Col>
                                </Row>
                                <RaisedButton
                                    type="button"
                                    label="Cancel"

                                />
                            </Form>

                        </div>
                    </Col>
                    <Col xs="6" className="border">
                        <div className="text-center">
                            <Form >
                                <Row>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="facebook url"
                                                floatingLabelText="Facebook url"
                                                onChange={this.handleFacebookChange}
                                                fullWidth={true}
                                                value={this.state.facebook_link}

                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6">
                                        <FormGroup>
                                            <TextField
                                                hintText="twitter url"
                                                floatingLabelText="Twitter url"
                                                onChange={this.handleTwitterChange}
                                                fullWidth={true}
                                                value={this.state.twitter_link}

                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <TextField
                                        hintText="google url"
                                        floatingLabelText="Google url"
                                        onChange={this.handleGoogleChange}
                                        fullWidth={true}
                                        value={this.state.google_link}

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <TextField
                                        hintText="state"
                                        floatingLabelText="State"
                                        onChange={this.handleStateChange}
                                        fullWidth={true}
                                    />
                                </FormGroup>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>

                                            <RaisedButton
                                                type="button"
                                                label="Upload profile image"
                                                secondary={true}
                                                onClick={this.toggle1}

                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>

                                            <RaisedButton
                                                type="button"
                                                label="Upload fundraiser logo"
                                                secondary={true}
                                                onClick={this.toggle2}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <RaisedButton
                                    type="button"
                                    label="Update profile"
                                    primary={true}
                                    onClick={this.update}
                                />
                            </Form>

                        </div>
                    </Col>
                </Row>

                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                    <ModalHeader toggle={this.toggle1}>Upload Image</ModalHeader>
                    <ModalBody>
                        <Upload 
                            imagetype = "fundraiserProfile"
                            userid = {this.props.details.user_data.id}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <RaisedButton
                            type="button"
                            label="Cancel"
                            secondary={true}
                            onClick={this.toggle1}
                        />
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                    <ModalHeader toggle={this.toggle1}>Upload Logo</ModalHeader>
                    <ModalBody>
                        <Upload
                              imagetype = "fundraiserLogo"
                              userid = {this.props.details.user_data.id}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <RaisedButton
                            type="button"
                            label="Cancel"
                            secondary={true}
                            onClick={this.toggle2}
                        />
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default withRouter(update);
