const asyncWrapper=(fn)=>{
    return async (req,res,next)=>{
        try {
            await fn(req,res,next); //now we are calling the controller
        } catch (error) {
            next(error);
        }
    }
}

module.exports=asyncWrapper;