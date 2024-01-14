import { Playlist } from "../../models/playlistModel.js";
import Joi from "joi";
export const addSongToPlaylist = async (req, res) => {
    const schema =  Joi.object({
        playlistId : Joi.string().required(),
        songId : Joi.string().required()
    })

    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send({message : error.details[0].message});

    const playlist = await Playlist.findById(req.body.playlistId);


    if(playlist.songs.indexOf(req.body.songId) === -1) {
        playlist.songs.push(req.body.songId)
    }else {
        return res.status(403).send({ message: "Song already exist" });
    }

    await playlist.save()

    res.status(200).send({data : playlist, message : "Added to playlist"})
}