import {Component} from "react";
import {
    NavigationBar,
    CopyrightBar
} from "../../components/index";

import Mayun from "./mayun.png";
import "./member.scss";

class MemberPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"member-page"}>
                <NavigationBar/>
                <div className="container">
                    <div className="row">
                        <main className="main-content col-md-10">
                            <section>
                                <h4 className="section-title">导师队伍</h4>
                                <ul className="list">
                                    <li className="col-md-4 item">
                                        <img src={Mayun} alt="mayun"/>
                                        <div className="captionWrapper">
                                            <div className="heading">马云</div>
                                            <div className="text">荣誉客座老师</div>
                                        </div>
                                    </li>
                                    <li className="col-md-4">
                                        <img src={Mayun} alt="mayun"/>
                                        <div className="captionWrapper">
                                            <div className="heading">马云</div>
                                            <div className="text">荣誉客座老师</div>
                                        </div>
                                    </li>
                                    <li className="col-md-4">
                                        <img src={Mayun} alt="mayun"/>
                                        <div className="captionWrapper">
                                            <div className="heading">马云</div>
                                            <div className="text">荣誉客座老师</div>
                                        </div>
                                    </li>
                                    <li className="col-md-4">
                                        <img src={Mayun} alt="mayun"/>
                                        <div className="captionWrapper">
                                            <div className="heading">马云</div>
                                            <div className="text">荣誉客座老师</div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </main>
                        <aside className="col-md-2 side-bar">
                            <div className="widget list-bar">
                                <h4 className="title">俱乐部成员</h4>
                                <ul className="list">
                                    <li>
                                        <a href="">2017</a>
                                    </li>
                                    <li>
                                        <a href="">2017</a>
                                    </li>
                                    <li>
                                        <a href="">2017</a>
                                    </li>
                                    <li>
                                        <a href="">2017</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
                <CopyrightBar/>
            </div>
        );
    }
}

export default MemberPage;
