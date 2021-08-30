

const Sequelize = require("sequelize");
const db =require("../db")

// 实例化sequelize
const sequelize = new Sequelize(db)

// 导入模型统一管理(推荐使用官方方法)
const Student = sequelize.import(__dirname + '/student.js')
const MyClass = sequelize.import(__dirname + '/clazz.js')
    Student.associate=function(){
        Student.belongsTo(MyClass,{
            as:'student',
            foreignKey:'myclass',
            targetKey:'myclasses'
        })
    };

           MyClass.associate=function(){
        MyClass.hasMany(Student,{
            as:'myclass',
            foreignKey:'myclass',
            targetKey:'myclasses'
        })
    }

