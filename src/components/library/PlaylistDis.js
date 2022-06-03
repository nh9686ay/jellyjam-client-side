import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function PlaylistDis({ playlists }) {

    async function deletePlaylist(id) {
        const { data } = await axios.delete('http://localhost:5005/playlist/deleteplaylist/' + id)
        console.log(data)
    }


  return (
    <div>

        <Link to={'/'} className="link">
            <button>HOME</button>
        </Link>

        {
            playlists.map((playlist, i) => {
                return (
                    <div key={i}>
                        {/* Go to playlist by id page */}
                        <Link to={'#'} className="link">
                            <h3>{playlist.name}</h3>
                            <img src={playlist.image_url} alt='playlist image'/>
                            <h4>{playlist.description}</h4>
                        </Link>
                        <button onClick={() => deletePlaylist(playlist._id)}>Delete</button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default PlaylistDis