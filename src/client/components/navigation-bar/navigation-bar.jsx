require("./navigation-bar.scss");

const { Navbar, NavItem, Nav, NavDropdown, MenuItem } = Bootstrap;
const werunLogo = require("./werun-fudiao.png");

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar fluid id="navigation-bar">
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            新闻动态
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            成员信息
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            俱乐部历史
                        </NavItem>
                    </Nav>
                    <Nav id="logo-item">
                        <NavItem>
                            <a href="./index.html">
                                <img src={werunLogo} alt="logo" />
                            </a>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem eventKey={4} href="#">
                            项目展示
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            科研成果
                        </NavItem>
                        <NavDropdown
                            eventKey={6}
                            title="其他"
                            id="navigation-dropdown"
                        >
                            <MenuItem eventKey={6.1}>俱乐部纳新</MenuItem>
                            <MenuItem eventKey={6.2}>冰峰实验室</MenuItem>
                            <MenuItem eventKey={6.3}>威海翰宝科技</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
