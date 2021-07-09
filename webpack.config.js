module.exports = {
	mode: "development",
	entry: './src/index.js',
	
	devServer: {
		contentBase: './dist'
	},
	module: {
	      rules: [
		{
		      test: /\.scss$/,
		      use: [
		      // Creates `style` nodes from JS strings
		      "style-loader",
		      // Translates CSS into CommonJS
		      "css-loader",
		      // Compiles Sass to CSS
		      "sass-loader",
		      ],
		},
	      ],
	    },
      };