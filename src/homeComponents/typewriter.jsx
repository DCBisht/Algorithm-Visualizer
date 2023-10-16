import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-4">
                <span className="badge badge-dark bg-info">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms',"N Queen","Convex Hull","Recursion tree"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;