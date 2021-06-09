module.exports = class MyPlugin{
    constructor(filename){
        this.filename = filename || 'file.txt';
    }
    apply(compiler){
        console.log('运行了'); 
        compiler.hooks.emit.tap('MyPlugin', (compilation)=>{
            let fileList = [];
            for(let key in compilation.assets){
                let content = `文件名：${key},大小：${compilation.assets[key].size()/1000}kb`;
                fileList.push(content);
            }
            let str = fileList.join('\n\n');
            compilation.assets[this.filename] = {
                source(){
                    return str;
                },
                size(){
                   return str.length
                }
            }
        })
    }
}