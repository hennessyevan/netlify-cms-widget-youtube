import PropTypes from "prop-types";
import React from "react";
import urlParser from "js-video-url-parser";

export default class Preview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoInfo: {}
		};
	}

	getImage(videoInfo) {
		if (videoInfo) {
			return urlParser.create({
				videoInfo,
				format: "longImage",
				params: { imageQuality: "maxresdefault" }
			});
		}
	}

	render() {
		const value = this.props.value;
		const { url, id, mediaType, provider = "youtube" } = value;
		const { imageURL = "" } = this.getImage({ url, id, mediaType, provider });

		console.log(value);

		return (
			<div className="yt-widgetPreview">
				{value.imageURL || imageURL ? (
					<img
						style={{ width: "100%" }}
						src={value.imageURL ? value.imageURL : imageURL}
						alt="Youtube Video Preview"
					/>
				) : (
					""
				)}
			</div>
		);
	}
}

Preview.propTypes = {
	value: PropTypes.node
};
