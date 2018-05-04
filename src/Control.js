import PropTypes from "prop-types";
import React from "react";

export default class Control extends React.Component {
	constructor(props) {
		super(props);
		this.state = { valid: false };
	}
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		forID: PropTypes.string,
		value: PropTypes.node,
		classNameWrapper: PropTypes.string.isRequired
	};

	static defaultProps = {
		value: ""
	};

	validateURL = e => {
		const ytReg = new RegExp(
			"(?:https?://)?(?:(?:(?:www.?)?youtube.com(?:/(?:(?:watch?.*?(v=[^&s]+).*)|(?:v(/.*))|(channel/.+)|(?:user/(.+))|(?:results?(search_query=.+))))?)|(?:youtu.be(/.*)?))"
		);

		if (ytReg.test(e.target.value)) {
			this.setState({ valid: true });
		} else {
			this.setState({ valid: false });
		}

		this.props.onChange(e.target.value);
	};

	render() {
		const { forID, value, onChange, classNameWrapper } = this.props,
			{ valid } = this.state;

		return (
			<input
				type="text"
				id={forID}
				style={{
					color: valid ? "#00A86B" : ""
				}}
				className={classNameWrapper}
				value={value || ""}
				valid={valid}
				onChange={this.validateURL}
			/>
		);
	}
}
