const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post("/User", async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            firstname: req.body.firstname,
            email: req.body.email
        };
        const user = new User(newUser);
        await user.save();

        return res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        throw new Error(`Error Creating a User ${error.message}`)
    }
});

module.exports = router;