import {LoginBox} from "../../components/index.js";
import {Component} from "react";

require("./login.scss");

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginBox/>
            </div>
        );
    }
}

export default LoginPage;
