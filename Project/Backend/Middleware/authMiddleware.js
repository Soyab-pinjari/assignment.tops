const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {

      
       

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "token not provided"
            });
        }

        const token = authHeader.split(' ')[1];
   
        const decode = jwt.verify(token, 'secret123');

        req.user = decode;

        next();

    } catch (error) {
 console.log(error);

         return res.status(401).json({
            success:false,
            message:error.message
        });

    }
};

module.exports = authMiddleware;