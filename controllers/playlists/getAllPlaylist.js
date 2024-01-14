import { Playlist } from "../../models/playlistModel.js";
export const getAllPlaylist = async (req ,res ) => {
    const playlist = await Playlist.find()
    res.status(200).send({data : playlist});
}