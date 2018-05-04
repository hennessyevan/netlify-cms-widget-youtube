import Control from "./Control";
import Preview from "./Preview";

if (typeof window !== "undefined") {
	window.youtubeControl = Control;
	window.youtubePreview = Preview;
}

export { Control as youtubeControl, Preview as youtubePreview };
