# netlify-cms-widget-youtube

[Check out a demo!](https://netlify-cms-widget-youtube.netlify.com/demo)

Provides a simple text input for youtube videos. Validates strings with a green text color and provides a preview image in the preview pane.

![screenshot of youtube widget](screenshot.png)

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-youtube
```

```js
import youtube from "netlify-cms-widget-youtube";

CMS.registerWidget("youtube", youtubeControl, youtubePreview);
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-youtube@^0.0.1"></script>

<script>
  CMS.registerWidget('youtube', youtubeControl, youtubePreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: youtube }
```

## Support

For help with this widget, open an [issue](https://github.com/hennessyevan/netlify-cms-widget-youtube) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
