[![NPM](https://img.shields.io/npm/v/netlify-cms-widget-youtube.svg)](https://www.npmjs.com/package/netlify-cms-widget-youtube)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/netlify-cms-widget-youtube.svg)
![Sourcegraph for Repo Reference Count](https://img.shields.io/sourcegraph/rrc/github.com/hennessyevan/netlify-cms-widget-youtube.svg)

# netlify-cms-widget-youtube

[Check out a demo!](https://netlify-cms-widget-youtube.netlify.com/demo)

Provides a simple text input for youtube videos. Validates strings with a green text color and provides a preview image in the preview pane.

### Looking for suggestions for additional functionality. PRs are Welcome!

![screenshot of youtube widget](screenshot.png)

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-youtube
```

```js
import { youtubeControl, youtubePreview } from "netlify-cms-widget-youtube";

CMS.registerWidget("youtube", youtubeControl, youtubePreview);
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-youtube@^0.0.4"></script>

<script>
  CMS.registerWidget('youtube', youtubeControl, youtubePreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: youtube, extraInfo: false }
```

When `extraInfo: true` **[BETA]** the widget returns an object from [jsVideoUrlParser](https://github.com/Zod-/jsVideoUrlParser)

```graphql
{
	url: String
	id: String
	provider: String
	mediaType: String
}
```

## Roadmap

*   [x] Youtube Image Preview
*   [x] Broader Video Support
*   [ ] Youtube Search function
*   [ ] Inline Embed option
*   [ ] Couple with a Youtube "Editor Widget"

## Support

For help with this widget, open an [issue](https://github.com/hennessyevan/netlify-cms-widget-youtube) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
