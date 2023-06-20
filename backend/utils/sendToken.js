
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    response.setHeader('authorization', `${token}`)

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

};

module.exports = sendToken;