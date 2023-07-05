import express from 'express';
import { userModel } from '../../model/User.js';

const router = express.Router()



router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        return res.status(209).send("User Alreardy Exist!!");
    }

    try {
        const newUser = new userModel({ name, email, password })
        await newUser.save();
        return res.status(200).send("Register Successfuly!!");
    } catch (error) {
        return res.status(400).send("Unable to register!");
    }
})
router.post('/login', async (req, res) => {

    const { email, password } = req.body
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(204).send("User Not Found");
    }

    if (user.password === password) {
        return res.status(200).send("Login successfully")
    }
    else {
        return res.status(401).send("Password is wrong!!");
    }

})

export default router