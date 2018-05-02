/*
* @Author: Neeze@ZJS
* @Date:   2018-01-15
* @Email:  543457946@qq.com
* @Description: werun time login box
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-17
*/
require("./login-box.scss");
const Jumbotron = Bootstrap.Jumbotron;
const Panel = Bootstrap.Panel;

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
            <div className="container" id="login-box">
                <Jumbotron>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <span>Log in with</span>
                        </Panel.Heading>
                        <Panel.Body>
                            github
                        </Panel.Body>
                        <Panel.Footer>
                            <span>© Copyright2018, WeRun Club</span>
                        </Panel.Footer>
                    </Panel>
                </Jumbotron>
            </div>
        );
    }
}

export default LoginBox;
