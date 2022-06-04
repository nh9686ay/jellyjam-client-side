import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';

function CreatePlaylist() {



    const playlistInitForm = {
        des: '',
        image_url: '',
        name: ''
    }

    const [playlistForm, setPlaylistForm] = useState(playlistInitForm) 
    const [playlist, setPlaylist] = useState() 

    const createPlaylistChange = (e) => {
        setPlaylistForm({ ...playlistForm, [e.target.id]: e.target.value })
        console.log(playlistForm)
        console.log(playlist)
    }

    const createPlaylistSubmit = (e) => {
        e.preventDefault();
        setPlaylist(playlistForm)
        console.log(playlist)
        //reset input fields 
        // setPlaylistForm(playlistInitForm)
    }
    

    if(playlist) {
        
        console.log(`playlist${playlist}`)
        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
                ? "https://jellyjam-server.herokuapp.com/playlist/createplaylist"
                : "/playlist/createplaylist" 
        axios.post(url, {
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
        <div>
            <h1>Create your own Playlist</h1>
        </div>

        
        <form onSubmit={createPlaylistSubmit}>

            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={playlistForm.name} onChange={createPlaylistChange}></input>
            <br></br>

            <label htmlFor="des">Description: </label>
            <input type="text" id="des" value={playlistForm.des} onChange={createPlaylistChange}></input>
            <br></br>

            <label htmlFor="image_url">Image: </label>
            <input type="text" id="image_url" value={playlistForm.image_url} onChange={createPlaylistChange}></input>
            <br></br>
            
 
            <button type="submit">Create Playlist</button>
     
        </form>
        <div className='navWrap'>
            <SideNav />
        </div>
 
        <Link to={'/'} className="link">
            <button>HOME</button>
        </Link>

    </div>
  )
}

export default CreatePlaylist