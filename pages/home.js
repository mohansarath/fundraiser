import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Input from '../components/signup';
import { putCall } from '../services/api';


export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Input />
            </div>
        )
    }
}