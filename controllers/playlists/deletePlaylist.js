import { Playlist } from "../../models/playlistModel.js";
export const deletePlaylist = async (req ,res ) => {
    const playlist = await Playlist.findById(req.params.id);

    await playlist.deleteOne()
    res.status(200).send({message : "Remove from library"})
}