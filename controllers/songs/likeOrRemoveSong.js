import { Song } from "../../models/songModel.js";
export const likeOrRemoveSong = async (req, res) => {
    try {
        let resMessage = "";
        
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(400).send({ message: "Song does not exist" });

        const user = await User.findById(req.user.id);

        const index = user.likedSongs.indexOf(song._id);

        if (index === -1) {
            // If the song is not in the likedSongs array, add it
            await User.findByIdAndUpdate(
                req.user.id,
                { $push: { likedSongs: song._id } },
                { upsert: true }
            );
            resMessage = "Added to your liked songs";
        } else {
            // If the song is already in the likedSongs array, remove it
            await User.findByIdAndUpdate(
                req.user.id,
                { $pull: { likedSongs: song._id } }
            );
            resMessage = "Removed from your liked songs";
        }

        res.status(200).send({ message: resMessage });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}