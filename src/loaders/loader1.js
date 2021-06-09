module.exports = function(sourceCode){
    console.log('加载了loader1')
    
    return sourceCode.replace(/变量/g, 'var')   
}