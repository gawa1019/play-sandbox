var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: {
		dndTest: "./src/dndTest/index.js"
	},
	output: {
		path:"../public/javascripts",
		filename:"[name]/app.js"
	},
	module: {
		loaders: [
            {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
            },
			{
				test: /\.css$/,
				exclude: /node_module/,
				loaders:['style', 'css?modules&localIdentName=[name]_[local]__[hash:base64]']
			}
        ]
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEBUG__: JSON.stringify(JSON.parse('true')),
			__RELEASE__: JSON.stringify(JSON.parse('false'))
		}),
		function () {
			this.plugin('watch-run', function(watching, callback) {
				console.log('\033[36m' + 'Begin compile at ' + new Date() + ' \033[39m');
				callback();
			})
		},
		new webpack.optimize.CommonsChunkPlugin("common", "common.js")
	]
};
