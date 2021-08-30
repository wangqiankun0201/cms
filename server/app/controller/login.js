const Controller =require("egg").Controller

class LoginController extends Controller{
    async login(){
        let username=this.ctx.request.body.user.username;
        let password=this.ctx.request.body.user.password;
        if(username==="wangqiankun"&&password==123456){
            let user_jwt={username:username}
            let token=this.app.jwt.sign(user_jwt,this.app.config.jwt.secret);
            this.ctx.body={
                code:20000,
                token:token
            };
        }else{
            this.ctx.body={
                code:40000,
                msg:"用户民或密码错误"
            }
        }
    }
}

module.exports=LoginController;