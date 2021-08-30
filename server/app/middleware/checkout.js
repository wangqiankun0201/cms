function checkToken(){
    return async function(ctx,next){
        try{
            let token = ctx.request.header.token;
            let decode = ctx.app.jwt.verify(token,ctx.app.config.jwt.secret);
            if(decode.username){
                await next()
            }else{
                ctx.body={
                    code:404,
                    msg:"用户验证失败"
                }
            }
        }catch(e){
            ctx.body={
                code:2000,
                msg:"无效的token"
            }
        }
    }
}

module.exports=checkToken;