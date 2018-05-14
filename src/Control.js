import PropTypes from "prop-types";
import React from "react";
import urlParser from "js-video-url-parser";

export default class Control extends React.Component {
	constructor(props) {
		super(props);
		this.state = { valid: false };
	}
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		forID: PropTypes.string,
		value: PropTypes.object,
		classNameWrapper: PropTypes.string.isRequired
	};

	static defaultProps = {
		value: {}
	};

	validateURL = e => {
		if (urlParser.parse(e.target.value)) {
			this.setState({ valid: true });
		} else {
			this.setState({ valid: false });
		}

		this.props.onChange({
			url: e.target.value,
			videoInfo: urlParser.parse(e.target.value)
		});
	};

	isValid = () => {
		return this.state.valid;
	};

	render() {
		const {
			forID,
			value,
			onChange,
			onChangeObject,
			classNameWrapper
		} = this.props;
		const { valid } = this.state;

		return (
			<input
				type="text"
				id={forID}
				style={{
					borderColor: valid ? "#00A86B" : ""
				}}
				className={classNameWrapper}
				value={value.url || ""}
				valid={valid}
				onChange={this.validateURL}
			/>
		);
	}
}
