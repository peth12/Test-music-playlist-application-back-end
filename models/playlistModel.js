import mongoose from "mongoose";
import Joi from "joi";




const playlistSchema = new mongoose.Schema({
    name : {type :String , required : true},
    desc : {type : String},
    songs : {type : Array , default : []},
    img : {type : String, default : "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/03/spotify-playlist-cover-woman-listeningt-to-headphones-purple-music-032322.jpg"}
})

const validatePlaylist = (playlist) => {
    const schema = new Joi.object({
        name : Joi.string().required(),
        desc : Joi.string().allow(""),
        songs : Joi.array().items().required(),
        img : Joi.string().allow(""),

    })

    return schema.validate(playlist)
}

const Playlist = mongoose.model("playlist", playlistSchema)

export { Playlist, validatePlaylist}