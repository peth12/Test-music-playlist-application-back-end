import { Song } from "../../models/songModel.js";
export const getAllSong = async (req, res) => {
    const songs = await Song.find();
    res.status(200).send({ data: songs });
}