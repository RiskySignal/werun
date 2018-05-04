/*
* @Author: Neeze@ZJS
* @Date:   2018-01-15
* @Email:  543457946@qq.com
* @Description: werun time login box
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-17
*/
require("./login-box.scss");
const Panel = Bootstrap.Panel;
const image_QQ = require("./QQ.svg");
const image_wechart = require("./wechart.svg");
const FormGroup = Bootstrap.FormGroup;
const FormControl = Bootstrap.FormControl;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;

class LoginBox extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        return (
            <div className="container-fluid" id="login-box">
                <div
                    className="container col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0"
                    id="login-content">
                    <Panel bsStyle="primary">
                        <Panel.Heading className="text-center">Log in with</Panel.Heading>
                        <Panel.Body>
                            <div className="container">
                                <div className="account-socials">
                                    <div className="account-socials-row">
                                        <a href="#" className="account-social">
                                            <div className="image">
                                                <img src={image_QQ} alt="qq-登录"/>
                                            </div>
                                            <div className="text-center">腾讯qq</div>
                                        </a>
                                        <a href="#" className="account-social">
                                            <div className="image">
                                                <img src={image_wechart} alt="wechart-登录"/>
                                            </div>
                                            <div className="text-center">微信</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown-divider">OR</div>
                                <Form
                                    className="col-xs-12 col-lg-9 col-sm-11 col-md-10 col-center-block custom-input-form">
                                    <FormGroup>
                                        <FormControl type="email" placeholder="account"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl type="password" placeholder="password"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <span className="login-error-text text-danger hidden">账户密码不正确</span>
                                    </FormGroup>
                                    <FormGroup className="text-center forget-group">
                                        <Button id="login" className="btn-primary">Log in</Button>
                                        <a href="#" id="forget-link">Forgot your password?</a>
                                    </FormGroup>
                                    <FormGroup className="text-center">
                                        <b>Don't have an account?</b>
                                        <a href="#" id="signup-link">Sign up</a>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Panel.Body>
                        <Panel.Footer className="text-center">© Copyright 2018, WeRun Club. All rights
                            reserved.</Panel.Footer>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default LoginBox;
