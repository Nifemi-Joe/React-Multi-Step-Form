const path = require('path');

module.exports = {
	entry: '/Users/mac/WebstormProjects/React-Multi-Step-Form/multi-step-form/src/index.js', // Replace 'src/index.js' with the path to your entry file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'), // Output directory
	},
	resolve: {
		fallback: {
			timers: require.resolve('timers-browserify'),
			crypto: require.resolve('crypto-browserify'),
			http: require.resolve('stream-http'),
			url: require.resolve('url/'),
			fs: false, // or provide a polyfill or mock implementation
			child_process: false, // or provide a polyfill or mock implementation
			// Add other modules as needed
		},
		modules: ['node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', // Add babel-loader for transpiling JavaScript files
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
