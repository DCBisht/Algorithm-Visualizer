import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queen from "./queenComponents/queen";
import ConvexHull from "./convexHullComponents/convexHull";

import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Graph from "./Graph/graph";
import About from './homeComponents/about';




class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route path='/pathfinder'  component={Pathfinder}/>
                    <Route path='/prime' component={Seive}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/nqueen' component={Queen}/>
                    <Route path='/convexhull' component={ConvexHull}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/about' component={About}/>
                    <Route path='/graph' component={Graph}/>
                    <Route path='/' component={Home}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
