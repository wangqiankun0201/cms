const Controller = require("egg").Controller;

class StudentController extends Controller{
    async index(){
        let studentList = await this.app.model.Student.findAll();
        this.ctx.body=studentList;
    }
    async create(){
        let student = this.ctx.request.body.student;
        let class_id;
        // switch(student.myclass){
        //     case "一班":class_id = 1;break;
        //     case "二班":class_id = 2;break;
        //     case "三班":class_id = 3;break;
        // }
        await this.app.model.Student.create({
            number:student.number,
            name:student.name,
            sex:student.sex,
            score:student.score,
            myclass:student.myclass,
            class_id
        })
        this.ctx.body="添加成功"
    }
    async destroy(){
        let number = this.ctx.params.id;
        let student = await this.app.model.Student.findOne({where:{number:number}});
        student.destroy();  
        this.ctx.body="删除成功"
    }
}

module.exports=StudentController;