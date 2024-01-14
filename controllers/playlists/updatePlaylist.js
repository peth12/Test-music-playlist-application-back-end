import { Playlist } from "../../models/playlistModel.js";
import Joi from "joi";
export const updatePlaylist = async (req ,res) => {
    const schema = Joi.object({
        name : Joi.string().required(),
        desc : Joi.string().allow(""),
        img : Joi.string().allow(""),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send({message : error.details[0].message});

    const playlist = await Playlist.findById(req.params.id);

    if(!playlist) return res.status(404).send({message : "Playlist not found"});

    playlist.name = req.body.name;
    playlist.desc = req.body.desc;
    playlist.img = req.body.img;

    await playlist.save()

    res.status(200).send({message : "Update successfully"})
    
}