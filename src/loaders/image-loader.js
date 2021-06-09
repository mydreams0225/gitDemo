const loaderUtils = require('loader-utils')
function loader(buffer){
// const content = toFile.call(this,buffer);
   let {limit = 1000, fileFormat = '[contenthash].[ext]'} = loaderUtils.getOptions(this);
   let content;
   console.log('字节',buffer.byteLength)
   if(buffer.byteLength > limit ){
    content = toFile.call(this,buffer,fileFormat);
   }else {
    content = toBase64(buffer);
   }
    return `module.exports = \`${content}\``;
}


loader.raw  = true

module.exports = loader;
// 转base64进制
function toBase64(buffer){
    const base64 = buffer.toString('base64');
 
    return `data:image/jpeg;base64,${base64}`
}

function toFile(buffer,fileFormat){
    const filename = loaderUtils.interpolateName(this, fileFormat, {
        content:buffer
    });
    this.emitFile(filename, buffer);
    return filename;
}