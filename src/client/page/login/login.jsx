/*
* @Author: Neeze@ZJS
* @Date:   2018-01-15
* @Email:  543457946@qq.com
* @Description: login page wrapper
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-17
*/
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
