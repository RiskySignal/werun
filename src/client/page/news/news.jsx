import {Component} from "react";
import {
    NavigationBar,
    CopyrightBar
} from "../../components/index";

import Laravel from "./laravel.png";
import "./news.scss";

class NewsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"news"}>
                <NavigationBar/>
                <div className="container">
                    <div className="row">
                        <main className={"col-md-8 main-content"}>
                            <article className="post">
                                <div className="post-head">
                                    <div className="post-head">
                                        <h1 className="post-title">
                                            Werun 俱乐部新一次纳新
                                        </h1>
                                        <div className="post-meta">
                                            <label htmlFor="time">发布日期： </label>
                                            <time className="time">2018年6月6日</time>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-media">
                                    <img src={Laravel} alt="laravel"/>
                                </div>
                                <div className="post-content">
                                    <p>
                                        WeRun 俱乐部2018年第二次纳新现在开始了，欢迎学弟学妹踊跃报名
                                    </p>
                                </div>
                                <div className="post-permalink">
                                    <a href="#" className={"btn btn-default"}>阅读全文</a>
                                </div>
                                <footer className="post-footer clearfix"/>
                            </article>
                            <article className="post">
                                <div className="post-head">
                                    <div className="post-head">
                                        <h1 className="post-title">
                                            Werun 俱乐部新一次纳新
                                        </h1>
                                        <div className="post-meta">
                                            <label htmlFor="time">发布日期</label>
                                            <time className="time">2018年6月6日</time>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-media">
                                    <img src={Laravel} alt="laravel"/>
                                </div>
                                <div className="post-content">
                                    <p>
                                        WeRun 俱乐部2018年第二次纳新现在开始了，欢迎各位学弟学妹踊跃报名
                                    </p>
                                </div>
                                <div className="post-permalink">
                                    <a href="#" className={"btn btn-error"}>阅读全文</a>
                                </div>
                                <footer className="post-footer clearfix"/>
                            </article>
                            <article className="post">
                                <div className="post-head">
                                    <div className="post-head">
                                        <h1 className="post-title">
                                            Werun 俱乐部新一次纳新
                                        </h1>
                                        <div className="post-meta">
                                            <label htmlFor="time">发布日期</label>
                                            <time className="time">2018年6月6日</time>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-media">
                                    <img src={Laravel} alt="laravel"/>
                                </div>
                                <div className="post-content">
                                    <p>
                                        WeRun 俱乐部2018年第二次纳新现在开始了，欢迎各位学弟学妹踊跃报名
                                    </p>
                                </div>
                                <div className="post-permalink">
                                    <a href="#">阅读全文</a>
                                </div>
                                <footer className="post-footer clearfix"/>
                            </article>
                        </main>
                        <aside className={"side-bar col-md-4"}>
                            <div className="widget">
                                <h4 className="title">
                                    俱乐部
                                </h4>
                                <div className="content club">
                                    <p>QQ群： <a
                                        href="https://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Fjq.qq.com%2F%3F_wv%3D1027%26k%3D5G4swfz&desc=%E5%BF%AB%E6%9D%A5%E5%8A%A0%E5%85%A5%E7%BE%A4%E8%81%8A%E3%80%902018werun%E4%BF%B1%E4%B9%90%E9%83%A8%E4%BA%8C%E8%BD%AE%E7%BA%B3%E6%96%B0%E3%80%91%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%B2%BE%E5%BD%A9%E5%86%85%E5%AE%B9%E3%80%82&title=2018werun%E4%BF%B1%E4%B9%90%E9%83%A8%E4%BA%8C%E8%BD%AE%E7%BA%B3%E6%96%B0&summary=%E5%8A%A0%E5%85%A5%E6%9C%AC%E7%BE%A4%EF%BC%8C%E6%B1%87%E8%81%9A%E6%9B%B4%E5%A4%9A%E7%B2%BE%E5%BD%A9&pics=http%3A%2F%2Fp.qlogo.cn%2Fgh%2F563439168%2F563439168%2F100%3Ft%3D1526215134&site=%E9%82%80%E8%AF%B7%E5%8A%A0%E7%BE%A4&style=201&width=32&height=32">2018werun俱乐部二轮纳新</a>
                                    </p>
                                    <p>地址：<a>研究院1号楼中501</a></p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <CopyrightBar/>
            </div>
        );
    }
}

export default NewsPage;
