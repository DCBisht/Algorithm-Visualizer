import React, {Component} from 'react';

// import React from 'react';
import './About.css';
import {Link} from "react-router-dom";
import Navbar from './navbar';
import Footer from './footer';



class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div className="about-container">
                
            <h1>About Algorithm Visualizer</h1>
            <p>Welcome to the Algorithm Visualizer, a tool designed to help you understand various algorithms by visualizing their processes step by step.</p>
            
            <h2>Features</h2>
            <ul>
                <li>Interactive visualizations for a variety of algorithms.</li>
                <li>Step-by-step breakdown of algorithm operations.</li>
                <li>Customizable input data for a personalized learning experience.</li>
                <li>Code snippets in multiple languages to understand the implementation details.</li>
            </ul>

            <h2>Supported Algorithms</h2>
            <ul>
                <li>Sorting: Bubble Sort, Merge Sort, Quick Sort, and more.</li>
                <li>Graphs: Dijkstra's Algorithm, Breadth-First Search, Depth-First Search, and more.</li>
                <li>Tree-based: Binary Search Tree operations, AVL Tree rotations, and more.</li>
            </ul>

            <h2>How to Use</h2>
            <p>Select an algorithm from the main page, adjust the input data if desired, and click on "Visualize". You can then observe the visualization and step through the algorithm at your own pace.</p>

            <h2>Contribute</h2>
            <p>If you'd like to contribute, find us on GitHub and submit a pull request. We're always looking for improvements and additions!</p>
            
            <footer>
                <p>Created by [Your Name/Team].</p>
                <p>Contact us at: [Your Email]</p>
            </footer>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default About;