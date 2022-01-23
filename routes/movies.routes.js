const router = require("express").Router();
const movieModel = require("../models/Movie.model");
const celibrityModel = require("../models/Celebrity.model");

/* GET all celebrities */
router.get("/movies", async (req, res, next) => {
    try{
        const movies = await movieModel.find().populate("cast")


        res.render("movies/movies.hbs",
        {movies : movies});
    }catch(err){
      console.error(err);
    }
    
});

router.get("/movies/create", (req, res, next) => {
   res.render("movies/new-movie.hbs");
    
});

router.post("/movies/create", async (req, res, next) => {
  const newMovie = { ...req.body };
   try{ 
    await movieModel.create(newMovie)
  res.redirect("/movies");
 } catch (err){
   console.log(err);
 }
});

module.exports = router;
