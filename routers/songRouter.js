import express from 'express'
import validObjectId from '../middlewares/validObjectId.js'
import {createSong} from '../controllers/songs/createSong.js'
import { getAllSong } from '../controllers/songs/getAllSong.js'
import { updateSong } from '../controllers/songs/updateSong.js'
import { deleteSong } from '../controllers/songs/deleteSong.js'

const songRouter = express.Router()

// create song
songRouter.post("/", createSong)

// get all songs
songRouter.get("/", getAllSong)

// update song
songRouter.put("/:id", validObjectId, updateSong)

// delete song by id 
songRouter.delete("/:id", validObjectId, deleteSong)


export { songRouter }