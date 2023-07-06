import { clientModel } from "../model/Client.js";
export const clientSignUp = async (req, res) => {
    const { name, username, password, type} = req.body;
    const client = await clientModel.findOne({ username });
    if (client) {
        return res.status(209).send("User Alreardy Exist!!");
    }

    try {
        const newClient = new clientModel({ name, username, type, password})
        await newClient.save();
        return res.status(200).send("Register Successfuly!!");
    } catch (error) {
        console.log(error)
        return res.status(400).send("Unable to register!");
    }
}

export const clientLogin= async (req, res) => {

    const { username, password } = req.body
    const user = await clientModel.findOne({ username });
    if (!user) {
        return res.status(204).send("User Not Found");
    }
    if (user.password === password) {
        return res.status(200).json(user);
    }
    else {
        return res.status(401).send("Password is wrong!!");
    }

}