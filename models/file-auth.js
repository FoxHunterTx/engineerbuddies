function auth(req, res, next) {
    if (!req.signed.Cookies.user) {
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            let err = new Error("Not authenticated");
            res.setHeader("WWW-Authenticate", "Basic");
            err.status.401;
            next(err);   
        }
        let auth = new Buffer.from(authHeader.split(" ")[1],"base64")
           .toString()
           .split(":");
        

    }
}

module.exports = auth;

