import { Song } from "../../models/songModel.js";
export const updateSong = async (req, res) => {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send({ data: song, message: "Update song successfully" });
}