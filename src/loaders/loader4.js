module.exports = function(sourceCode){
    console.log('加载了loader4')
    
    return sourceCode.replace(/常量/g, 'const')
}