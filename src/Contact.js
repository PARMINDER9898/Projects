import React , {Component} from 'react';
import logo from './logo.svg';
import './Contact.css';


    class Contact extends Component{
        render() {
            return(
                <div className="container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="row">
                        <div className="box"><b>Name</b>
                        <ul>
                                <li>Parminder Singh</li>
                                <li>Parminder Singh</li>
                                <li>Parminder Singh</li>
                                <li>Parminder Singh</li>
                                <li>Parminder Singh</li>
                                <li>Parminder Singh</li>
                            </ul>
                        </div>
                        <div className="box"><b>Mobile Number</b>
                            <ul>
                                <li>9478885867</li>
                                <li>9478885867</li>
                                <li>9478885867</li>
                                <li>9478885867</li>
                                <li>9478885867</li>
                                <li>9478885867</li>
                            </ul>
                        </div>
                        <div className="box"><b>Email-Id</b>
                        <ul>
                                <li>ps9993151@gmail.com</li>
                                <li>ps9993151@gmail.com</li>
                                <li>ps9993151@gmail.com</li>
                                <li>ps9993151@gmail.com</li>
                                <li>ps9993151@gmail.com</li>
                                <li>ps9993151@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            );
        }
    }

export default Contact;