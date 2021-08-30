// const Sequelize = require("sequelize")

module.exports=app=>{
    const {INTEGER,STRING}=app.Sequelize;
    const Student = require("./student")
    const MyClass=app.model.define("clazz",{
        // myclasses:{type:STRING,primaryKey:true},
        myclasses:{type:STRING(10)},
        name:STRING(10),
        total:{type:INTEGER(20)}
    });
    //     MyClass.associate=function(){
    //     MyClass.hasMany(Student,{
    //         as:'myclass',
    //         foreignKey:'myclass',
    //         targetKey:'myclasses'
    //     })
    // }

    return MyClass;
}