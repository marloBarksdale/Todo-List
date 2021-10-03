const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
       index: './src/index.js',
       task:"./src/task.js",
       project:"./src/project.js",
       projectElement:"./src/projectElement.js",
     
   
    },

    plugins: [
           new HtmlWebpackPlugin({
              title: 'To-Do List',
            }),
          ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: path.resolve(__dirname, '/node_modules'),
            },
        ],
    },
};