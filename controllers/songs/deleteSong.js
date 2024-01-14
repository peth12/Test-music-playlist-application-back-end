import { Song } from "../../models/songModel.js";
export const deleteSong  = async (req, res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Delete Song Successfully" });
}