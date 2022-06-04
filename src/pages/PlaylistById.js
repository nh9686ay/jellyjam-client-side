import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PlaylistDetails from '../components/playlistbyid/PlaylistDetails';
import SideNav from '../components/SideNav';

function PlaylistById() {

    const { id } = useParams();

    const [playlist, setPlaylist] = useState();

    const fetchPlaylist = async () => {
        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
        ? 'https://jellyjam-server.herokuapp.com/playlist/playlistbyid/' + id 
        : '/playlist/playlistbyid/' + id 
        const { data } = await axios.get(url)
        console.log(data)
        setPlaylist(data)
    }
    useEffect(() => {
        fetchPlaylist();
    }, [])

    if(!playlist) {
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <h1>PlaylistById</h1>

        <PlaylistDetails fetchPlaylist={fetchPlaylist} playlist={playlist} />
        <div className='navWrap'>
            <SideNav />
        </div>

    </div>
  )
}

export default PlaylistById