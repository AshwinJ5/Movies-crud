const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema({
    // "id": 1,
    // "movie": "The Shawshank Redemption",
    // "rating": 9.2,
    // "image": "images/shawshank.jpg",
    // "imdb_url": "https://www.imdb.com/title/tt0111161/"
    id:{
        required:true,
        type:Number,
        unique:true
    },
    movie:{
        required:true,
        type:String,
    },
    rating:{
        required:true,
        type:Number,
    },
    image:{
        required:true,
        type:String,
    },
    imdb_url:{
        required:true,
        type:String,
    }
})
const movies=mongoose.model('movies',movieSchema)
module.exports=movies