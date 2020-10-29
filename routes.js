const express = require('express');
const router = express.Router();
const budgetSchema = require("./models/myBudget_schema");

//Get  all posts

router.get("/", async(req,res) => {
    const budget = await budgetSchema.find({});
    res.send(budget); 
})

router.post("/", async(req,res) => {
    var temp_budget = {
        title: req.body.title,
        related_value: req.body.related_value,
        color : req.body.color
    }

   
    const budget = new budgetSchema(temp_budget);
    await budget.save();
    res.send(budget);

})

//find by id
router.get("/:id", async(req,res) =>{
    try{
        const dataById = await budgetSchema.findOne({_id: req.params.id});
        res.send( dataById);
    } catch{
        res.status(404);
        res.send('404 not found');
    }
})

//Update

router.patch("/:id" , async(req,res) => {
    try{
        const dataById = await budgetSchema.findOne({_id: req.params.id});
      
        if(req.body.title){
            dataById.title = req.body.title;
        }
        if(req.body.related_value){
            dataById.related_value = req.body.related_value;
        }
        if(req.body.color){
            dataById.color = req.body.color;
        }

          dataById.save();
        res.send(dataById);

    }catch {
        res.status(404)
		res.send({ error: "budget doesn't exist! for the given data" })
    }
})

//Delete

router.delete("/:id", async(req,res) => {
    try {
   await budgetSchema.deleteOne({_id:req.params.id})
    res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "budget doesn't exist!" })
	}
})


module.exports = router;