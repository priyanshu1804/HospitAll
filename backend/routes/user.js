const express = require('express');
const {Users} = require('../models/user');
const { Hospitals } = require('../models/hospital');
const userRouter = express.Router();
userRouter.get('/home',async (req,res)=>{
    const hospital = await Hospitals.find();
    res.json({
        hospital
    })
});

module.exports = {userRouter}