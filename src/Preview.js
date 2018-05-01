import PropTypes from "prop-types";
import React from "react";

export default class Preview extends React.Component {
	format = input => {
		const youtubeID = input.replace(
			/(?:https?:\/\/)(?:www\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([A-Za-z0-9]{10,12})/gi,
			"$1"
		);
		return youtubeID;
	};
	render() {
		const { value } = this.props;
		const combedValue = this.format(value);
		return (
			<div className="yt-widgetPreview">
				<img
					style={{ width: "80%" }}
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
