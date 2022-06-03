import React, { useState } from 'react';
import axios from 'axios';
import SearchSong from './SearchSong'

function PlaylistDetails({ playlist }) {


    async function deletePlaylist(id) {
        //Need to deploy backend again before using this
        // const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
        //     ? 'https://jellyjam-server.herokuapp.com/playlist/deleteplaylist/' + id
        //     : 'playlist/deleteplaylist/' + id 
        const { data } = await axios.delete('playlist/deleteplaylist/' + id )
        console.log(data)
    }



  return (
    <div>
        <h2>PlaylistDetails</h2>

        <div>
            <h3>{playlist.name}</h3>
            <img src={playlist.image_url} alt='playlist image'/>
            <h4>{playlist.description}</h4>
            <br></br>

            <button onClick={() => deletePlaylist(playlist._id)}>Delete</button>
            <SearchSong />
        </div>

    </div>
  )
}

export default PlaylistDetails