import { Song } from "../../models/songModel.js";
import { Playlist } from "../../models/playlistModel.js";
export const search = async (req ,res) => {
    const search = req.query.search;
    if(search !== "") {
        const songs  = await Song.find({name : {$regex : search , $options : "i"}}).limit(10);
        const playlists = await Playlist.find({name : {$regex : search , $options : "i"}}).limit(10);

        const result = { songs , playlists}
        res.status(200).send({data : result})
    }else {
        res.status(200).send({})
    }
}