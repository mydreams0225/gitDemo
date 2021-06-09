module.exports = env=>{
  
    if(env.prod){
        return {
            ...require('./base'),
            ...require('./prod')
        }
    }else{
        return {
            ...require('./base'),
            ...require('./dev')
        }
    }
}