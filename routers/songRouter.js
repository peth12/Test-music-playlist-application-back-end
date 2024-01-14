import express from 'express'
import validObjectId from '../middlewares/validObjectId.js'
import {createSong} from '../controllers/songs/createSong.js'
import { getAllSong } from '../controllers/songs/getAllSong.js'
import { updateSong } from '../controllers/songs/updateSong.js'
import { deleteSong } from '../controllers/songs/deleteSong.js'
import { likeOrRemoveSong } from '../controllers/songs/likeOrRemoveSong.js'
import { getAllLikeSong } from '../controllers/songs/getAllLikeSong.js'

const songRouter = express.Router()

// create song
songRouter.post("/", createSong)

// get all songs
songRouter.get("/", getAllSong)

// update song
songRouter.put("/:id", validObjectId, updateSong)

// delete song by id 
songRouter.delete("/:id", validObjectId, deleteSong)

// like or remove song
// songRouter.put("/like/:id", [validObjectId, auth], likeOrRemoveSong);

// get all like song
// songRouter.get("/like", auth, getAllLikeSong)

export { songRouter }