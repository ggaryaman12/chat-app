import jwt from 'jsonwebtoken';


const generateTokenandSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET , {
        expiresIn: "15d"
    });
    console.log(token)
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, //prevent XSS attacks cross site scriptiong attacks
        sameSite: "strict"
    });
    console.log("here")
};

export default generateTokenandSetCookie;