import React, { useState } from 'react';
import axios from 'axios';

function CreatePlaylist() {

    const playlistInitForm = {
        des: '',
        image_url: '',
        name: ''
    }

    const [playlistForm, setPlaylistForm] = useState(playlistInitForm) 
    const [playlist, setPlaylist] = useState() 

    const createPlaylistChange = (e) => {
        setPlaylistForm({...playlistForm, [e.target.id]: e.target.value })
        console.log(playlistForm)
        console.log(playlist)
    }

    const createPlaylistSubmit = (e) => {
        e.preventDefault();
        setPlaylist(playlistForm)
        console.log(playlist)
    }
    
    if(playlist) {
        
        console.log(`playlist${playlist}`)
        axios.post('/playlist/createplaylist', {
            des: playlist.des,
            image_url: playlist.image_url,
            name: playlist.name
        })
        .then(res => {
            console.log(res)
        })
        .catch(console.error)
    }


  return (
    <div>
        <h1>Create your own Playlist</h1>

        <form onSubmit={createPlaylistSubmit} onChange={createPlaylistChange}>

            <label htmlFor="name">Name: </label>
            <input type="text" id="name" defaultValue={playlistForm.name} ></input>
            <br></br>

            <label htmlFor="des">Description: </label>
            <input type="text" id="des" defaultValue={playlistForm.des} ></input>
            <br></br>

            <label htmlFor="image_url">Image: </label>
            <input type="text" id="image_url" defaultValue={playlistForm.image_url} ></input>
            <br></br>
            
            <button type="submit">Create Playlist</button>
        </form>

    </div>
  )
}

export default CreatePlaylist