/*
* @Author: Neeze@ZJS
* @Date:   2018-01-15
* @Email:  543457946@qq.com
* @Description: werun time login box
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-15
*/
import React, { Component } from "react";
require("./WeRunTimeLoginBox.scss");

class WeRunTimeLoginBox extends Component {
	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="werun-time-login-box">
				this is werun time login box
			</div>
		);
	}
}

export default WeRunTimeLoginBox;
