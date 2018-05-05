import {LoginBox} from "../../components/index.js";

require("./login.scss");

class Login extends React.Component {
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

ReactDOM.render(<Login/>, document.querySelector("#weruntime-root-wrapper"));
