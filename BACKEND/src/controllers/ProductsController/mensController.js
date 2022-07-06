
const express = require("express");
const router = express.Router();

const Mens = require("../../models/ProductsModel/mensModel");

router.post("",async(req,res)=>{

    try {
        let mens = await Mens.create(req.body);
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})


router.get("",async(req,res)=>{
    
    try {
        if(req.query.category==undefined){

            const mens= await Mens.find().lean().exec();
            return  res.status(201).send(mens)
        }
     else{

        const mens= await Mens.find({category:req.query.category}).lean().exec();
        return  res.status(201).send(mens)
     }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })

router.get("/:id",async(req,res)=>{
console.log('id', "id1");

  
    try {
        let mens = await Mens.findById({_id:req.params.id}).lean().exec();
        console.log(mens)
        return res.status(200).send(mens)
  
    } catch (e) {
        return res.status(500).send(e.message)

    }
})



router.patch("/:id",async(req,res)=>{
console.log('id', "id2");

    try {
        let mens = await Mens.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{
console.log('id', "id3");

    try {
        let mens = await Mens.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})





router.get("/sort/asc",async(req,res)=>{
    console.log('sortasc', "asc");
    try {
        const mens= await Mens.find().sort({price:1}).lean().exec();
      return  res.status(201).send(mens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })
 
   

  router.get("/sort/desc",async(req,res)=>{
    try {
        const mens= await Mens.find().sort({price:-1}).lean().exec();
      return  res.status(201).send(mens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 });


 
 router.get("",async(req,res)=>{
    
    try {
        if(req.query.category==undefined){

            const mens= await Mens.find().lean().exec();
            return  res.status(201).send(mens)
        }
     else{

        const mens= await Mens.find({category:req.query.category}).lean().exec();
        return  res.status(201).send(mens)
     }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })








module.exports = router;