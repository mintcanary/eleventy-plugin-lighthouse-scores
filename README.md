## Eleventy plugin lighthouse scores

Adds short-code to turn

```
{% lighthouse "40", "60", "80", "100" %}`
``

into:

```
<dl class="lighthouse"><div class="lighthouse_item" data-rating="bad">
	<dt class="lighthouse_label">Performance</dt>
	<dd class="lighthouse_score">40</dd>
</div><div class="lighthouse_item" data-rating="ok">
	<dt class="lighthouse_label">Accessibility</dt>
	<dd class="lighthouse_score">60</dd>
</div><div class="lighthouse_item" data-rating="ok">
	<dt class="lighthouse_label">Best practices</dt>
	<dd class="lighthouse_score">80</dd>
</div><div class="lighthouse_item" data-rating="good">
	<dt class="lighthouse_label">SEO</dt>
	<dd class="lighthouse_score">100</dd>
</div></dl>
```

## Usage

```bash
npm install eleventy-plugin-lighthouse-scores
```

Then, include it in your `.eleventy.js` config file:

```js
const lighthouseScores = require("eleventy-plugin-lighthouse-scores");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(lighthouseScores);
};
```

## Development

This template is setup to run a single page 11ty site for testing your plugin functionality. The build files are excluded from the final plugin package via `.npmignore`.

Your plugin functionality should live in/be exported from `.eleventy.js`. You will find a sample of creating a filter plugin in this template, including setting up a default config and merging user options.

### Testing your plugin

You can test your functionality within this project's local 11ty build by running `npm start`, but you'll also want to test it _as a plugin_.

From another local 11ty project, you can set the `require()` path relatively to your plugin's project directory, and then use it just as you would for a plugin coming from a package.

Example, assuming you place all your repositories within the same parent directory:

```js
const pluginName = require("../plugin-directory");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginName, { optionName: 'if needed' );
};
```

Then, run the project to test the plugin's functionality.

Note that making changes in the plugin source will likely require restarting the test project.

### Resources for creating an 11ty plugin

- Bryan Robinson's ["Create a Plugin with 11ty"](https://www.youtube.com/watch?v=aO-NFFKjnnE) demonstration on "Learn With Jason"

---
