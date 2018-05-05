require("./index.scss");

import { NavigationBar } from "../../components/index";

const Logo = require("./logo-werun.png");

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" id="index-page">
                <div id="top-new-version-hints" className="col-12 hidden-xs">
                    <span>WeRun俱乐部官网主页全新上线，欢迎加入我们！</span>
                </div>
                <header className="headaer" id="header">
                    <div className="container">
                        <figure className="logo animated fadeInDown">
                            <img src={Logo} alt="Logo" />
                        </figure>
                        <h1 className="animated fadeInDown delay-07s text-center">
                            WeRun Club
                        </h1>
                        <ul className="animated fadeInUp delay-1s text-center">
                            <li>科研和工程</li>
                            <li>专注学生自主发展和学习能力</li>
                        </ul>
                        <div className="link-btn text-center animated fadeInUp delay-1s">
                            <a href="#" className="serviceLink">
                                Check us out on Github
                            </a>
                        </div>
                    </div>
                </header>
                <NavigationBar />
                主页
            </div>
        );
    }
}

ReactDOM.render(
    <IndexPage />,
    document.querySelector("#weruntime-root-wrapper")
);
