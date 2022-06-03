import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function PlaylistDis({ playlists }) {

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

        <Link to={'/'} className="link">
            <button>HOME</button>
        </Link>

        {
            playlists.map((playlist, i) => {
                return (
                    <div key={i}>
                        {/* Go to playlist by id page */}
                        <Link to={'/playlist/' + playlist._id} className="link">
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