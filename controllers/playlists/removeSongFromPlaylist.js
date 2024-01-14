import { Playlist } from "../../models/playlistModel.js";
import Joi from "joi";
export const removeSongFromPlaylist = async (req , res) => {
    const schema =  Joi.object({
        playlistId : Joi.string().required(),
        songId : Joi.string().required()
    })

    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send({message : error.details[0].message});

    const playlist = await Playlist.findById(req.body.playlistId);



    const index = playlist.songs.indexOf(req.body.songId);
    playlist.songs.splice(index, 1);
    await playlist.save()
    res.status(200).send({data : playlist, message : "Remove from playlist" })

}