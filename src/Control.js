import PropTypes from "prop-types";
import React from "react";

export default class Control extends React.Component {
	constructor(props) {
		super(props);
		this.state = { valid: false, youtubeID: "" };
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

	format = input => {
		const youtubeID = input.replace(
			/(?:https?:\/\/)(?:www\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([A-Za-z0-9]{10,12})/gi,
			"$1"
		);
		return youtubeID;
	};

	validateURL = e => {
		const ytReg = new RegExp(
			"(?:https?://)?(?:(?:(?:www.?)?youtube.com(?:/(?:(?:watch?.*?(v=[^&s]+).*)|(?:v(/.*))|(channel/.+)|(?:user/(.+))|(?:results?(search_query=.+))))?)|(?:youtu.be(/.*)?))"
		);

		if (ytReg.test(e.target.value)) {
			this.setState({
				valid: true,
				youtubeID: this.format(e.target.value)
			});
		} else {
			this.setState({ valid: false });
		}

		this.props.onChange(e.target.value);
	};

	render() {
		const { forID, field, value, onChange, classNameWrapper } = this.props;
		const { valid, youtubeID } = this.state;

		return (
			<div>
				{field.get("exportId") ? (
					<input type="hidden" id={`${forID}-id`} value={youtubeID} />
				) : (
					""
				)}
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
			</div>
		);
	}
}
