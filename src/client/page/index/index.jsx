require("./index.scss");

import {NavigationBar} from "../../components/index";
import {Component} from "react";
import {CopyrightBar} from "../../components/index";

const Logo = require("./logo-werun.png");
const Team_Kat = require("./team_kat-min.png");
const Team_Vince = require("./team_vince-min.png");
const Team_Ken = require("./team_ken-min.png");
const Movie = require("./life.webm");
const Web = require("./web.svg");
const Server = require("./server.svg");
const Think = require("./think.svg");

class IndexPage extends Component {
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
                            <img src={Logo} alt="Logo"/>
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
                <NavigationBar/>
                <section className="container" id="club-life">
                    <h2>club life</h2>
                    <h6>实验室，是一个学生、生活、工作的绝佳圣地</h6>
                    <figure className="col-lg-10 col-md-10 col-sm-12 col-xs-12 center-block life-media">
                        <video
                            src={Movie}
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            className="video"
                        >
                            您的浏览器不支持
                        </video>
                    </figure>
                </section>
                <section className="container" id="skills">
                    <h2>技能擅长</h2>
                    <h6>
                        经过10来年的发展、创新，我们已经找到了自己开发的擅长领域
                    </h6>
                    <div className="skills-block clearfix">
                        <a href="#" className="skill">
                            <figure>
                                <img src={Web} alt="Web"/>
                            </figure>
                            <span>Web 前端</span>
                        </a>
                        <a href="#" className="skill">
                            <figure>
                                <img src={Server} alt="Web"/>
                            </figure>
                            <span>Java 后端</span>
                        </a>
                        <a href="#" className="skill">
                            <figure>
                                <img src={Think} alt="Web"/>
                            </figure>
                            <span>ACM 算法</span>
                        </a>
                    </div>
                </section>
                <section className="container" id="instructor">
                    <h2>指导老师</h2>
                    <h6>实验室共有4名知道老师共同指导科研工作和项目开发</h6>
                    <div className="instructor-block clearfix">
                        <div className="instructor-box">
                            <div className="instructor">
                                <img src={Team_Kat} alt="kat"/>
                            </div>
                            <h3>朱东杰 老师</h3>
                            <span>移动计算</span>
                            <p>欢迎加入我们</p>
                        </div>
                        <div className="instructor-box">
                            <div className="instructor">
                                <img src={Team_Ken} alt="ken"/>
                            </div>
                            <h3>朱东杰 老师</h3>
                            <span>移动计算</span>
                            <p>欢迎加入我们</p>
                        </div>
                        <div className="instructor-box">
                            <div className="instructor">
                                <img src={Team_Vince} alt="vince"/>
                            </div>
                            <h3>朱东杰 老师</h3>
                            <span>移动计算</span>
                            <p>欢迎加入我们</p>
                        </div>
                        <div className="instructor-box">
                            <div className="instructor">
                                <img src={Team_Ken} alt="ken"/>
                            </div>
                            <h3>朱东杰 老师</h3>
                            <span>移动计算</span>
                            <p>欢迎加入我们</p>
                        </div>
                    </div>
                </section>
                <CopyrightBar/>
            </div>
        );
    }
}

export default IndexPage;
