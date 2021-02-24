const jwt = require("jsonwebtoken");

const jwt_key = "my-secret";
const jwt_exp = 5000;

let payload = {
    username : "Alex",
    roles : ["admin"],
};

// Create JSON Web Token
const token = jwt.sign(payload, jwt_key, {
    expiresIn:
        jwt_exp
});
console.log(token);

setTimeout(() => {
    //Verify a JWT
    jwt.verify(token, jwt_key, (err, data) => {
        if (err) {
            console.log("Token verification failed: ", err.message);
        } else {
            console.log("User: ", data);
        }
    });
})