// const Sequelize = require("sequelize")
module.exports=app=>{
    // import MyClass from "./clazz"
    const {STRING,DOUBLE}=app.Sequelize;
    const MyClass = require("./clazz")
    // const MyClass = require("./clazz")(sequelize)
    const Student=app.model.define("student",{
        number:STRING,
        name:STRING,
        sex:STRING,
        score:DOUBLE,
        myclass:STRING,
    });


    // Student.associate=function(){
    //     Student.belongsTo(MyClass,{
    //         as:'student',
    //         foreignKey:'myclass',
    //         targetKey:'myclasses'
    //     })
    // }

    // queryInterface.addConstraint('student',['myclass'],{
    //     type:"foreign key",
    //     name:'myclass',
    //     reference:{
    //         table:"clazz",
    //         filed:"myclass"
    //     },
    //     onDelete:"cascade",
    //     onUpdate:"cascade"
    // })
     return Student;
    
}
