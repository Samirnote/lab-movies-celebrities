const router = require("express").Router();
const celebrityModel = require("../models/Celebrity.model");


/* GET all celebrities */
router.get("/celebrities", async (req, res, next) => {
    try{
        const celebrities = await celebrityModel.find()
        res.render("celebrities/celebrities.hbs",
        {celebrities : celebrities});
    }catch(err){
      console.error(err);
    }
    
  });

router.get("/celebrities/create", (req, res, next) => {
   res.render("celebrities/new-celebrity.hbs");
    
  });

router.post("/celebrities/create", async (req, res, next) => {
  const newCelebrity = { ...req.body };
   try{ 
    await celebrityModel.create(newCelebrity)
  res.redirect("/celebrities");
 } catch (err){
   console.log(err);
 }
  });
module.exports = router;
