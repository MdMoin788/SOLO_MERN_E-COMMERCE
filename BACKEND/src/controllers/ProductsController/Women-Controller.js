
const express = require("express");
const router = express.Router();

const Womens = require("../../models/ProductsModel/Women-Model");



router.get("",async(req,res)=>{
    console.log(req.query.category)
    try {
        if(req.query.category==undefined){

            const womens= await Womens.find().lean().exec();
            return  res.status(201).send(womens)
        }
     else{
        console.log(req.query.category)

        const womens= await Womens.find({category:req.query.category}).lean().exec();
        console.log('womens', womens);
        return  res.status(201).send(womens)
     }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })



router.post("",async(req,res)=>{

    try {
        let womens = await Womens.create(req.body);
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})



router.get("/:id",async(req,res)=>{

  
    try {
        let womens = await Womens.findById({_id:req.params.id}).lean().exec();
        console.log(womens)
        return res.status(200).send(womens)
  
    } catch (e) {
        return res.status(500).send(e.message)

    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let womens = await Womens.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let womens = await Womens.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})


router.get("/sort/asc",async(req,res)=>{
    console.log('sortasc', sortasc);
    try {
        const womens= await Womens.find().sort({price:1}).lean().exec();
      return  res.status(201).send(womens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })
 
   

  router.get("/sort/desc",async(req,res)=>{
    console.log('sortdesc', sortdesc);
    try {
        const womens= await Womens.find().sort({price:-1}).lean().exec();
      return  res.status(201).send(womens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 });


 










module.exports = router;