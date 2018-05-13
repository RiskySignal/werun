import {
    HashRouter as Router,
    Route
} from "react-router-dom";
import IndexPage from "./index/index";
import LoginPage from "./login/login";
import NewsPage from "./news/news";

import {Component} from "react";
import ReactDOM from "react-dom";
import MemberPage from "./member/member";

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={IndexPage}/>
                    <Route path='/index' component={IndexPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path='/news' component={NewsPage}/>
                    <Route path={"/member"} component={MemberPage}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Page/>, document.getElementById("weruntime-root-wrapper"));
