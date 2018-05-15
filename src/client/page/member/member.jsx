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
                        <main className="main-content col-md-9">
                            <section>
                                <h4 className="section-title">导师队伍</h4>
                                <ul className="list clearfix">
                                    <li className="col-md-4 col-sm-6">
                                        <div className={'item'}>
                                            <img src={Mayun} alt="mayun"/>
                                            <div className="captionWrapper">
                                                <div className="heading">马云</div>
                                                <div className="text">荣誉客座老师</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-4 col-sm-6">
                                        <div className={'item'}>
                                            <img src={Mayun} alt="mayun"/>
                                            <div className="captionWrapper">
                                                <div className="heading">马云</div>
                                                <div className="text">荣誉客座老师</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-4 col-sm-6">
                                        <div className={'item'}>
                                            <img src={Mayun} alt="mayun"/>
                                            <div className="captionWrapper">
                                                <div className="heading">马云</div>
                                                <div className="text">荣誉客座老师</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-4 col-sm-6">
                                        <div className={'item'}>
                                            <img src={Mayun} alt="mayun"/>
                                            <div className="captionWrapper">
                                                <div className="heading">马云</div>
                                                <div className="text">荣誉客座老师</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </main>
                        <aside className="col-md-3 side-bar hidden-sm hidden-xs">
                            <div className="widget list-bar">
                                <h4 className="title">俱乐部成员</h4>
                                <ul className="list">
                                    <li>
                                        <p className="title">指导老师</p>
                                    </li>
                                    <li>
                                        <p className="title">2018界成员</p>
                                    </li>
                                    <li>
                                        <p className="title">2017界成员</p>
                                    </li>
                                    <li>
                                        <p className="title">2016界成员</p>
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
