import React from 'react'
import { Link } from 'react-router-dom'

function PlaylistDis({ playlists }) {
  return (
    <div>

        {
            playlists.map((playlist, i) => {
                return (
                    <div key={i}>
                        {/* Go to playlist by id page */}
                        <Link to={'/#'} className="link">
                            <h3>{playlist.name}</h3>
                            <img src={playlist.image_url} alt='playlist image'/>
                            <h4>{playlist.description}</h4>
                        </Link>
                    </div>
                )
            })
        }

    </div>
  )
}

export default PlaylistDis