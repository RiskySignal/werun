/*
* @Author: Neeze@ZJS
* @Date:   2018-01-15
* @Email:  543457946@qq.com
* @Description: werun time login box
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-17
*/
require("./WeRunTimeLoginBox.scss");
var Panel = require("react-bootstrap/lib/Panel");

class WeRunTimeLoginBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Panel>
				<Panel.Heading>头部</Panel.Heading>
				<Panel.Body>尾部</Panel.Body>
			</Panel>
		);
	}
}

export default WeRunTimeLoginBox;
