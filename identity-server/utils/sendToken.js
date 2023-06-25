const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
    const token = getJwtToken(user);

    res.setHeader('authorization', `${token}`)

    res.status(statusCode).json({
        success: true,
        token,
        user
    })

};

function getJwtToken(user) {
    console.log('jwt token: ', user);
    return jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { 
        expiresIn: '10m'
    });
}

module.exports = sendToken;