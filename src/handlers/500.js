module.exports=(error,req,res,next)=>{
    res.status(500).send({
        code:404,
        route:req.path,
        message:`Server Error:${error.message}`,
    });
}