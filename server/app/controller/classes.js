const Controller = require("egg").Controller

class ClassController extends Controller{
    async index(){
        let classList = await this.app.model.Clazz.findAll();
        this.ctx.body=classList;
    }

    async create(){
        let myclass = this.ctx.request.body.myclasses;
        await this.app.model.Clazz.create({
            myclasses:myclass.myclass,
            name:myclass.name,
            total:0
        })
        this.ctx.body="添加成功"
    }

    async destroy(){
        let myclass = this.ctx.params.id;
        await this.app.model.Clazz.destroy({
            where:{
                myclasses:myclass
            }
        })
        this.ctx.body="删除成功"
    }
}

module.exports=ClassController
