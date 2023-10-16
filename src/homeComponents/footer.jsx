import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/DCBisht" data-show-count="true" aria-label="Follow @TamimEhsan on GitHub">Follow @DCBisht</GitHubButton></div>
                    <GitHubButton href="https://github.com/DCBisht" data-icon="octicon-star" data-show-count="true" aria-label="Star TamimEhsan/Pathfinder-2.0 on GitHub">Star</GitHubButton>
                    
                    <GitHubButton href="https://github.com/DCBisht" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork TamimEhsan/Pathfinder-2.0 on GitHub">Fork</GitHubButton>
                    
                </div>

                <div class="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://github.com/DCBisht" style={{color: "#65b6f0"}}> DCBisht</a>
                </div>

            </footer>
        );
    }
}

export default Footer;