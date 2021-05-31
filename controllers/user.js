const User = require('../models/user')
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.SECRETE, { expiresIn: '7d' })
}

module.exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name) {
        return res.status(401).json({ nameErr: 'Name is requred' })
    }
    if (!email) {
        return res.status(401).json({ emailErr: 'Email is requred' })
    }
    if (!password) {
        return res.status(401).json({ passwordErr: 'Pssword is requred' })
    } else if (password.length < 6) {
        return res.status(401).json({ passwordErr: 'Pssword must be 6 charactors' })
    }

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(422).json({ emailErr: "Email already exsists" })
        }

        // hash
        const hash = await bcrypt.hash(password, (10));
        try {
            const user = User.create({
                name,
                email,
                password: hash
            })
            const token = createToken(user);
            return res.status(201).json({ success: "Created Success", token })

        } catch (error) {
            return res.status(400).json({ error: error })
        }

    } catch (error) {
        return res.status(400).json({ error: error })
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(401).json({ emailErr: 'Email is requred' })
    }
    if (!password) {
        return res.status(401).json({ passwordErr: 'Pssword is requred' })
    } else if (password.length < 6) {
        return res.status(401).json({ passwordErr: 'Pssword must be 6 charactors' })
    }
    const user = await User.findOne({ email });
    if (user) {
        const matched = await bcrypt.compare(password, user.password);
        if (matched) {
            const token = createToken(user);
            return res.status(200).json({ loginSuccess: 'Login Success', token })

        } else {
            return res.status(400).json({ passwordErr: 'Password not Exsists' })
        }

    } else {
        return res.status(400).json({ emailErr: 'Email not Exsists' })
    }


}
