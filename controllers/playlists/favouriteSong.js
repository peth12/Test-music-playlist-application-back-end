import { Playlist } from "../../models/playlistModel.js";
export const favouriteSong = async (req, res ) => {

    const playlist = await Playlist.find({});
    res.status(200).send({data : playlist})
}