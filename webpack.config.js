const { merge } = require('webpack-merge');
const util = require('util')

const commonConfig = require("./webpack.common");
const devConfig = require("./webpack.dev");

module.exports = env => {
    // throw new Error(util.inspect(env, {showHidden: false, depth: null}));
    if (env.development == true) {
        return merge(commonConfig, devConfig);
    } else if (env.production == true) {
        return commonConfig
    } else {
        throw new Error('No matching configuration was found!');
    }
}