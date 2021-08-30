module.exports=app=>{
    app.beforeStart(async function(){
        // await app.model.sync({force:true});
        await app.model.sync({});
      

    })
}