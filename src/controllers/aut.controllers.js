import User from '../models/user.models.js';
import  bcrypt from 'bcryptjs'
import { createTokenAcess } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;

    // console.log(email, password, username);
    // res.send('Resgistrado');

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User ({
            username,
            email,
            password:passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createTokenAcess({ id: userSaved._id });
        res.cookie('token', token)
        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        });

    } catch (error) {
        res.status(500).json({massage: error.message })
    }

}
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne ({ email });
        if(!userFound) return res.status(400).json({message : "User not found"});

        const isMach = await bcrypt.compare(password, userFound.password);
        if(!isMach) return res.status(400).json({massage: "Error in credentails"});

        const token = await createTokenAcess({ id: userFound._id });
        res.cookie('token', token)
        res.status(201).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    } catch (error) {
        res.status(500).json({massage: error.message })
    }
}


export const logout = (req, res) =>{
    res.cookie('token', '', {
        expires : new Date(0),
    });
    return res.sendStatus(200);
}