import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <Link to="/"><a className="navbar-brand" href="/">Algorithm Visualizer</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link to="/about">   <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a></Link> 
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar;