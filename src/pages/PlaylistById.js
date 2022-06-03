import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PlaylistDetails from '../components/playlistbyid/PlaylistDetails'

function PlaylistById() {

    const { id } = useParams();

    const [playlist, setPlaylist] = useState();

    useEffect(() => {
        const fetchPlaylist = async () => {
            const { data } = await axios.get('/playlist/playlistbyid/' + id )
            console.log(data)
            setPlaylist(data)
        }
        fetchPlaylist();
    }, [])

    if(!playlist) {
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <h1>PlaylistById</h1>

        <PlaylistDetails playlist={playlist} />

    </div>
  )
}

export default PlaylistById