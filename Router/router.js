const express= require("express")
const router=express.Router()
const movieController=require("../Controller/movieController")

//get all movie details
router.get('/movies',movieController.getAllMovies)

//delete a movie details
router.delete('/remove/:mid',movieController.deleteAMovie)

//delete a movie details
router.put('/update/:mid',movieController.UpdateAMovie)

//add a movie details
router.post('/add',movieController.addAMovie)

module.exports=router