//entry -> output
const path = require('path')  //require is node build-in function
console.log(path.join(__dirname, 'public')); //it gives the path where the folder is
//join two global path and local path, we will get with actual final path we want
///Users/florence/Documents/Projects/indecision-app/public (root of the application)

module.exports = {
 //all configuration details
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'), //absolute path(can't use ./) where we wanna output that bundle file,
        filename: 'bundle.js' //anyname we want
    },
    //set up the array of rules how we want to use loader, babel loader will run under certain condition set in rules
    module: {
        rules: [{ //1st rule with 3 properties
            loader: 'babel-loader', //what loader we gonna use
            test: /\.js$/, //look for and check file is loaded with .js
            exclude: /node_modules/ //dont want babel to run node modules,aldy set up we dont wanna change those modules files
            //take all the js files which are not in the node_modules folder
        },{
            test: /\.scss$/,
            use: [//we use 'use' for array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.css$/,
            use: [//we use 'use' for array of loaders
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',//to show in console where the errors exists
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
       
    }
};

//loader  - anytime webpack see js file, converting jsx to regular js
//babel-core module - allow to use babel tools like babel,it doesn't have its functionality
//   we still have to configure it to use the presets we've aldy picked out
// babel-loader - is wp plugin to teach wp how to run babel when wp see certain files
// sass-loader=babel-loader - allow us to import sass files
// node-sass=babel-core - takes sass or scss codes and converts it in to regular css