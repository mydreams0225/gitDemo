let loaderUtils = require('loader-utils')
module.exports = function(sourceCode){
    console.log('加载了loader3')
   const options = loaderUtils.getOptions(this);
   console.log('入参', options)
    return sourceCode;
}