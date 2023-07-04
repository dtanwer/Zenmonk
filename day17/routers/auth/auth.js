const express = require('express');
const router = express.Router()
const path = require('path')
const fs = require("fs");
// const data = require('../../users/userData.json');

const SaveUser = (user) => {



}


router.post('/signup', (req, res) => {
    if (!fs.existsSync(path.join(__dirname + '../../../users', '/userData.json'))) {
        fs.writeFile(path.join(__dirname + '../../../users', '/userData.json'), JSON.stringify([]), () => {
            console.log("data Saved")
        });
    }

    fs.readFile(path.join(__dirname + '../../../users', '/userData.json'), 'utf-8', (err, data) => {
        let Users = JSON.parse(data)
        const flag = Users.some((user) => user.email === req.body.email);
        if (flag) {
            res.status(209).send("User Alreardy Exist!!");
        }
        else {
            Users.push(req.body);
            fs.writeFile(path.join(__dirname + '../../../users', '/userData.json'), JSON.stringify(Users), () => {
                console.log("data Saved")
            });
            res.status(200).send("Register Successfuly!!");
        }



    })

})
router.post('/login', (req, res) => {

    if (!fs.existsSync(path.join(__dirname + '../../../users', '/userData.json'))) {
        res.status(204).send("user Not Found");
    }

    fs.readFile(path.join(__dirname + '../../../users', '/userData.json'), 'utf-8', (err, data) => {
        let Users = JSON.parse(data)
        const filterData=Users.filter((user) => user.email === req.body.email)
        // const flag = Users.some((user) => user.email === req.body.email);
        // const flag1 = Users.some((user) => user.email === req.body.email && user.password === req.body.password);
        if (filterData.length===0) {
            res.statusMessage='User Not Found';
            res.status(204).send("User Not Found")
        }
        else if(filterData[0].password === req.body.password) {
            res.status(200).send("Login successfully")
        }
        else {
            res.status(401).send("Password is wrong!!");
        }

    })





})

module.exports = router;