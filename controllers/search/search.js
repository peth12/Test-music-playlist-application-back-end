import { Song } from "../../models/songModel.js";
import { Playlist } from "../../models/playlistModel.js";
export const search = async (req ,res) => {
    const search = req.body.search;
    if(search !== "") {
        const songs  = await Song.find({name : {$regex : search , $options : "i"}});
        const playlists = await Playlist.find({name : {$regex : search , $options : "i"}});

        const result = { songs , playlists}
        res.status(200).send({data : result})
    }else {
        res.status(200).send({})
    }
}