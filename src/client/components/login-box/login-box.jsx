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
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return <div className="container-fluid" id="login-box">
                <div className="col-lg-6 col-md-7 col-sm-8  col-xs-12" id="login-content">
                    <Panel bsStyle="primary">
                        <Panel.Heading className="text-center">
                            Log in with
                        </Panel.Heading>
                        <Panel.Body>
                            <div>
                                <div className="account-socials">
                                    <div className="account-socials-row">
                                        <a href="#" className="account-social">
                                            <div className="image">
                                                <img src={image_QQ} alt="qq-登录" />
                                            </div>
                                            <div className="text-center">
                                                腾讯qq
                                            </div>
                                        </a>
                                        <a href="#" className="account-social">
                                            <div className="image">
                                                <img src={image_wechart} alt="wechart-登录" />
                                            </div>
                                            <div className="text-center">
                                                微信
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className=".divider" />
                                <Form className="col-xs-12 col-lg-9 col-sm-11 col-md-10 col-center-block custom-input-form">
                                    <FormGroup>
                                        <FormControl type="email" placeholder="account" />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl type="password" placeholder="password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <span className="login-error-text text-danger hidden">
                                            账户密码不正确
                                        </span>
                                    </FormGroup>
                                    <FormGroup className="text-center forget-group">
                                        <Button id="login" className="btn-primary">
                                            Log in
                                        </Button>
                                        <a href="#" id="forget-link">
                                            Forgot your password?
                                        </a>
                                    </FormGroup>
                                    <FormGroup className="text-center">
                                        <b>Don't have an account?</b>
                                        <a href="#" id="signup-link">
                                            Sign up
                                        </a>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Panel.Body>
                        <Panel.Footer className="text-center">
                            © Copyright 2018, WeRun Club. All rights
                            reserved.
                        </Panel.Footer>
                    </Panel>
                </div>
            </div>;
    }
}

export default LoginBox;
