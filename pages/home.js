import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Input from '../components/signup';
import { putCall } from '../services/api';
import Login from '../components/login'

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* <Input /> */}
                <Login />
            </div>
        )
    }
}