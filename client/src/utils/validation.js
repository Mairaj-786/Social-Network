const valid = ({ email, password }) => {
    const err = {}
    if (!email) {
        err.email = "Please add your email*** "
    } else if (!email) {
        err.email = "Email formate is incorrect"
    }

    if (!password) {
        err.password = "Please  add your password*** "
    } else if (password.length < 6) {
        err.password = "password must be 6 charactors "
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }

}


export default valid;