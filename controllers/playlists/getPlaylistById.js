import { Playlist } from "../../models/playlistModel.js";
import { Song } from "../../models/songModel.js";
export const getPlaylistById = async (req , res) => {
    const playlist = await Playlist.findById(req.params.id);

    if(!playlist) return res.status(404).send("not found");

    const songs = await Song.find({_id : playlist.songs});
    res.status(200).send({data : {playlist, songs}});
}