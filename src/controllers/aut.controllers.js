import User from '../models/user.models.js';

export const register = await (req, res) => {
    const {email, password, username} = req.body;

    // console.log(email, password, username);
    // res.send('Resgistrado');

    try {
        

        const newUser = new User ({
            username,
            email,
            password
        });

        const userSved = await

    } catch (error) {
        res.status(500).json({massage: erro.message })
    }

}
export const login = (req, res) => res.send("login");