import { Song } from "../../models/songModel.js"
export const getAllLikeSong = async (req, res) => {
    const user = await User.findById(req.user.id)
    const song = await Song.find({ _id: user.likedSongs })
    res.status(200).send({ data: song })
}