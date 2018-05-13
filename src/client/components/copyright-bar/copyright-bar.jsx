import {Component} from "react";
import "./copyright-bar.scss";

import Logo from "./logo-werun.png";

class CopyrightBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer" id="copyright-bar">
                <div className="container">
                    <div className="footer-logo">
                        <a>
                            <img src={Logo} alt="werun logo"/>
                        </a>
                    </div>
                    <div className="footer-content">
                            <span>
                                Copyright © 2018 WeRun Club. All Rights Reserved
                            </span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default CopyrightBar;
