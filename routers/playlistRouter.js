import express from 'express'
import validObjectId from '../middlewares/validObjectId.js'
import { createPlaylist } from '../controllers/playlists/createPlaylist.js'
import { updatePlaylist } from '../controllers/playlists/updatePlaylist.js'
import { addSongToPlaylist } from '../controllers/playlists/addSongToPlaylist.js'
import { removeSongFromPlaylist } from '../controllers/playlists/removeSongFromPlaylist.js'
import { favouriteSong } from '../controllers/playlists/favouriteSong.js'
import { getPlaylistById } from '../controllers/playlists/getPlaylistById.js'
import { getAllPlaylist } from '../controllers/playlists/getAllPlaylist.js'
import { deletePlaylist } from '../controllers/playlists/deletePlaylist.js'

const playlistRouter = express.Router()


// create playlist
playlistRouter.post("/" , createPlaylist)

// edit playlist
playlistRouter.put("/edit/:id" , validObjectId, updatePlaylist)

// add song to playlist 
playlistRouter.put("/add-song" , addSongToPlaylist)

// remove song from playlist
playlistRouter.put("/remove-song" , removeSongFromPlaylist)


// favourite playlist
playlistRouter.get("/favourite" , favouriteSong)


// get by id 
playlistRouter.get("/:id" , validObjectId , getPlaylistById)


// get all playlist
playlistRouter.get("/"  , getAllPlaylist)

// delete playlist
playlistRouter.delete("/:id" ,validObjectId, deletePlaylist)

export {playlistRouter}