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
		field: PropTypes.object,
		forID: PropTypes.string,
		value: PropTypes.node,
		classNameWrapper: PropTypes.string.isRequired
	};

	static defaultProps = {
		value: ""
	};

	validateURL = e => {
		if (urlParser.parse(e.target.value)) {
			this.setState({ valid: true });
		} else {
			this.setState({ valid: false });
		}

		if (this.props.field.get("extraInfo")) {
			const { id, provider, mediaType } = urlParser.parse(e.target.value);
			this.props.onChange({
				url: e.target.value,
				id: id,
				provider: provider,
				mediaType: mediaType
			});
		} else {
			this.props.onChange(e.target.value);
		}
	};

	isValid = () => {
		return this.state.valid;
	};

	render() {
		const { forID, value, onChange, classNameWrapper } = this.props;
		const { valid } = this.state;
		const extraInfo = this.props.field.get("extraInfo");

		return (
			<input
				type="text"
				id={forID}
				style={{
					borderColor: valid ? "#00A86B" : ""
				}}
				className={classNameWrapper}
				value={extraInfo ? value.url : value}
				valid={valid}
				onChange={this.validateURL}
			/>
		);
	}
}
