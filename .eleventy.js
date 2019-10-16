module.exports = function (eleventyConfig) {

	// Force browserSync Reload for webpack css & js
	eleventyConfig.setBrowserSyncConfig({ watch: true });

	eleventyConfig.addPassthroughCopy('src/images')
	eleventyConfig.addPassthroughCopy('src/css/assets')
	// TODO: Incluir archivos configuración redirecciones Netlify


	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: "_includes",
			data: '_data'
		},
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'html'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	}
}