const jwt =require('jsonwebtoken')

const Auth=(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1]
    let verify= jwt.verify(token,'secret')
    if(verify){
          req.email=verify.email
          next()
    }else{
        res.send({message:'Invalid token'})
    }
}

module.exports = Auth