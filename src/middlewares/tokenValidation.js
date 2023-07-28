import jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const requireAuth = (req, res, next) => {

    // console.log(req.headers)
    const { token } = req.cookies;
    // console.log(token);
    if(!token)
    return res.status(401).json({ massage: "no token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) res.status(403).json({ massage : "invalido el token" });

        req.user = user;
        next();
    })
}