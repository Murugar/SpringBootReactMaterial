const path = require('path');
const context = path.resolve(__dirname, 'src');

const webpack = require('webpack');


module.exports = {
  entry: ['whatwg-fetch', './src/main/js/start.js'],
  devtool: 'sourcemaps',
  cache: true,
  output: {
    path: __dirname,
    filename: './src/main/resources/static/built/bundle.js'
  },
  module: {
	    loaders: [{
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components|public)/,
	      loader: "babel-loader"
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    },
	    { 
	      test: /\.css$/, 
	      loader: "style-loader!css-loader" 
	    },
	    { 
	      test: /\.png$/, 
	      loader: "url-loader?limit=100000" 
	    },
	    { 
	      test: /\.jpg$/, 
	      loader: "file-loader" 
	    }
	    ,
	    {
	      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
	      loader: 'url?limit=10000&mimetype=application/font-woff'
	    },
	    {
	      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
	      loader: 'url?limit=10000&mimetype=application/octet-stream'
	    },
	    {
	      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
	      loader: 'file'
	    },
	    {
	      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
	      loader: 'url?limit=10000&mimetype=image/svg+xml'
	    }
	    
	    ],
	  },
	  resolveLoader: {
	      moduleExtensions: ['-loader']
	    }
	 
	};

