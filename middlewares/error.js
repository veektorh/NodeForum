

module.exports = handleError = (app) => {

    app.use((req,res,next)=>{
        let error = new Error("Not Found") 
        error.status = 404
        next(error);
    });

    app.use((err,req,res,next)=>{
        let status= err.status || 500;

        res.status(status);
        res.json({
            status : false, 
            message : err.message, 
            data : {}}
            );
    });

}