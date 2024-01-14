import { Song, validateSong } from "../../models/songModel.js";
export const createSong = async (req, res) => {
    const { error } = validateSong(req.body);
    if (error)
        return res.status(400).send({ message: error.details[0].message });

    const song = await Song(req.body).save()
    res.status(201).send({ data: song, message: "Song created successfully" });
}

