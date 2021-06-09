module.exports = function(sourceCode){
    console.log('加载了style-loader')
    
    return `const a = document.createElement('style');
    a.innerHTML = \`${sourceCode}\`;
    module.exports = \`${sourceCode}
    \`
    document.head.appendChild(a);`;

}