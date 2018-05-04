import PropTypes from "prop-types";
import React from "react";

export default class Preview extends React.Component {
	format = input => {
		const regex = /(?:https?:\/\/)(?:www\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([A-Za-z0-9]{10,12})/i;
		const youtubeID = input.replace(regex, "$1");
		if (regex.test(input)) {
			return youtubeID;
		} else {
			return;
		}
	};
	render() {
		const { value } = this.props;
		const combedValue = this.format(value);
		console.log(combedValue);
		return (
			<div className="yt-widgetPreview">
				<img
					style={{ width: "100%" }}
					src={`http://img.youtube.com/vi/${combedValue}/maxresdefault.jpg`}
					alt="Youtube Video Preview"
				/>
			</div>
		);
	}
}

Preview.propTypes = {
	value: PropTypes.node
};
