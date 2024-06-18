const movies=require("../Model/movieModel")

//get movies

exports.getAllMovies=async(req,res)=>{
    const searchKey=req.query.search
    const query={
        movie:{$regex:searchKey,$options:"i"}
    }
    try {
        const result=await movies.find(query)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)

    }
    
}

//delete movies
exports.deleteAMovie=async(req,res)=>{
    const {mid}=req.params
    // console.log(mid);
    try {
        const result=await movies.findByIdAndDelete(mid)
        res.status(200).json(result)

    } catch (error) {
        res.status(401).json(error)

    }
}
//edit movies
exports.UpdateAMovie=async(req,res)=>{
    const{movie,rating,image,imdb_url}=req.body
    const {mid}=req.params
    try {
        const result=await movies.findOneAndUpdate({id:mid},{movie,rating,image,imdb_url})
        const updated=await result.save()
        res.status(200).json(updated)

    } catch (error) {
        res.status(401).json(error)

    }
}
//add  movies
exports.addAMovie=async(req,res)=>{
    const{id,movie,rating,image,imdb_url}=req.body
    try {
        const newMovie=new movies({
            id,movie,rating,image,imdb_url
        })
        await newMovie.save()
        res.status(200).json(newMovie)
    } catch (error) {
        res.status(401).json(error)

    }
}