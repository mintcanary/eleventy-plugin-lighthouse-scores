// Example use for the demo plugin:
// {% lighthouse "40", "60", "80", "100" %}

module.exports = (eleventyConfig, options) => {
	function lighthouseShortcode(perf, access, best, seo) {
		const items = [];
		const goodLabel = "good";
		const okLabel = "ok";
		const badLabel = "bad";
		const goodThreshold = 89;
		const okThreshold = 49;

		if (perf) {
			let rating;

			if (perf > goodThreshold) {
				rating = goodLabel;
			} else if (perf > okThreshold) {
				rating = okLabel;
			} else {
				rating = badLabel;
			}

			items.push({
				label: "Performance",
				score: perf,
				rating,
			});
		}

		if (access) {
			let rating;

			if (access > goodThreshold) {
				rating = goodLabel;
			} else if (access > okThreshold) {
				rating = okLabel;
			} else {
				rating = badLabel;
			}

			items.push({
				label: "Accessibility",
				score: access,
				rating,
			});
		}

		if (best) {
			let rating;

			if (best > goodThreshold) {
				rating = goodLabel;
			} else if (best > okThreshold) {
				rating = okLabel;
			} else {
				rating = badLabel;
			}

			items.push({
				label: "Best practices",
				score: best,
				rating,
			});
		}

		if (seo) {
			let rating;

			if (seo > goodThreshold) {
				rating = goodLabel;
			} else if (seo > okThreshold) {
				rating = okLabel;
			} else {
				rating = badLabel;
			}

			items.push({
				label: "SEO",
				score: seo,
				rating,
			});
		}

		let htmlOutput = `<dl class="lighthouse">`;
		for (let i = 0; i < items.length; i++) {
			htmlOutput += `<div class="lighthouse_item" data-rating="${items[i].rating}">
				<dt class="lighthouse_label">${items[i].label}</dt>
				<dd class="lighthouse_score">${items[i].score}</dd>
			</div>`;
		}
		htmlOutput += `</dl>`;

		return htmlOutput;
	}

	eleventyConfig.addShortcode("lighthouse", lighthouseShortcode);
};
