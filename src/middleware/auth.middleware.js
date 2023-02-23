import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    const token = req.cookies.token 

    if(token){
        const admin = jwt.verify(token, 'JWTSECRET')
        res.locals.admin = admin;
        next()
        return;
    }
    res.redirect('/')
}