import Control from "./Control.js";
import Preview from "./Preview.js";

if (typeof window !== "undefined") {
	window.youtubeControl = Control;
	window.youtubePreview = Preview;
}

export { Control as youtubeControl, Preview as youtubePreview };
