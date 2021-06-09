let loaderUtils = require('loader-utils');
module.exports = function(sourceCode){
    console.log('加载了loader2')
    const options = loaderUtils.getOptions(this);
    console.log('ddd',options)
    return sourceCode.replace(/未知数/g, 'let')
}