import React, { Component } from 'react';
import Navbar from '../components/navbarlogin';
import {withRouter} from 'react-router-dom';




class user extends Component {
    constructor(props) {
        super(props);
    
  } 
    render() {
        console.log('props:::::::::::::::',this.props);
        return (
            <div>
                <Navbar
                     details={this.props.location.state.detail}
                 />
                <div className="exactCenter">
                    {/* Logged in <br/>
                    {console.log(this.props.location.state.detail)}
                    {this.props.location.state.detail.user_data.email}<br/>
                    {this.props.location.state.detail.user_data.phone}<br/>
                    Last seen at {this.props.location.state.detail.user_data.last_logged_in}<br/>  */}
                </div>
            </div>
        )
    }
}
export default withRouter(user);
