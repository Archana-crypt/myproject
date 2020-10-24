const express = require('express')

const router = express.Router()
const Weather = require('../models/weather')

router.get('/' ,async(req,res) =>{
    try{
        const weatherd = await Weather.find()
        res.json(weatherd)
    }catch(err){
        res.send('Error ' + err)
    }
    

})

router.get('/:id' ,async(req,res) =>{
    try{
        const weather = await Weather.findById(req.params.id)
        res.json(weather)
        
    }catch(err){
        res.send('Error ' + err)
    }
    

})
router.post('/',async(req,res) =>{
    const weather = new Weather({
        area: req.body.area,
        temp: req.body.temp
    })
    try{
        const a1= await weather.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const weather= await Weather.findById(req.params.id)
        weather.temp=req.body.temp
        const a1= await weather.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const weather= await Weather.findByIdAndDelete(req.params.id)
        res.json(weather)

    }catch(err){
        res.send('Error + err')
    }
})
module.exports = router    