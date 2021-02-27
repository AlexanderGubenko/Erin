module.exports = {
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule
		.oneOf('inline')
		.resourceQuery(/inline/)
		.use('babel-loader')
		.loader('babel-loader')
		.end()
		.use('vue-svg-loader')
		.loader('vue-svg-loader')
		.end()
		.end()
		.oneOf('external')
		.use('file-loader')
		.loader('file-loader')
		.options({})
		.end();
		
		addStyleResource(config.module.rule('less').oneOf('vue'));
	},
	productionSourceMap: (process.env.NODE_ENV !== 'production')? false:true,
};

const path = require('path');
function addStyleResource (rule) {
rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: path.resolve(__dirname, 'src/pug-less/less/mixin.less'),
	})
}