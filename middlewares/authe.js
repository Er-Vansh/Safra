const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token =  req.cookies.token;


    if(!token) {

        return res.send(401).json({
            message : 'Unauthorized'
        })

    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        return next();

    } catch (err) {

        return res.send(401).json({
            message : 'Unauthorized'
        })

    }
}

module.exports = auth;