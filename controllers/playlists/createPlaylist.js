import { Playlist, validatePlaylist } from '../../models/playlistModel.js';
export const createPlaylist = async (req, res) =>  {
    const {error} = validatePlaylist(req.body);
    if(error) return res.status(400).send({message : error.details[0].message});
    
    const playlist = await Playlist({...req.body }).save()

    res.status(201).send({data : playlist});
 

}