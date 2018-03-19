import React, { Component } from 'react';
import Navbar from '../components/navbarlogin';
import { withRouter } from 'react-router-dom';
// import viewProf from '../components/';
import Input from '../components/create';
import { Row, Col, Container} from 'reactstrap';
import { getCall } from '../services/api';

class createpro extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    
        return (
            <div>
                {console.log("sdfghjk", this.props)}
                <Navbar
                    // details={this.props.location.state.udata}
                />
                <div className="exactCenter">
                {console.log("sdfghjkjskfkjkksjdkjfksjfklsjklvhjdvjkjdkfn", this.props)}
                    <Input
                        //   details={this.props.location.state.udata}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(createpro);
