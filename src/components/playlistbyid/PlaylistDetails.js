import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchSong from './SearchSong'
import { useParams } from 'react-router-dom';

function PlaylistDetails({ playlist,  setPlaylist }) {
    
    const { id } = useParams();

    async function deletePlaylist(id) {
        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
            ? 'https://jellyjam-server.herokuapp.com/playlist/deleteplaylist/' + id
            : 'playlist/deleteplaylist/' + id 
        const { data } = await axios.delete(url)
        console.log(data)
    }

    async function deleteSong(id) {
        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
                ? `https://jellyjam-server.herokuapp.com/playlist/deletesong/${id}/${playlist._id}`
                : `http://localhost:5005/playlist/deletesong/${id}/${playlist._id}`  
        const { data } = await axios.put(url)
        console.log(data)
        const fetchPlaylist = async () => {
            const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
            ? 'https://jellyjam-server.herokuapp.com/playlist/playlistbyid/' + id 
            : '/playlist/playlistbyid/' + id 
            const { data } = await axios.get(url)
            console.log(data)
            setPlaylist(data)
        }
        fetchPlaylist()
    }


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




  return (
    <div>
        <h2>PlaylistDetails</h2>

        <div>
            <h3>{playlist.name}</h3>
            <img src={playlist.image_url} alt='playlist image'/>
            <form onSubmit={() => deletePlaylist(playlist._id)}>

            <button >Delete</button>
            </form>
            <h4>{playlist.description}</h4>
            <br></br>

            {playlist.tracks.length 
            ? playlist.tracks.map((track, i) => {
                return (
                    <div key={i} >
                        <h1>{track.name}</h1>
                        {track.album.images.length ? 
                        <div>
                            <img className="playlist-img" src={track.album.images[1].url} alt='song img' />
                        </div>
                        : null
                        }
                        <form onSubmit={() => deleteSong(track.id)}>

                        <button type="submit">Delete Song</button>
                        </form>
                        {/* <button onClick={() => deleteSong(track.id)}>Delete Song</button> */}
                    </div>
                )
            })
            : <h4>no songs in playlist</h4>
            }
            <br></br>

            <SearchSong setPlaylist={setPlaylist} playlist={playlist} fetchPlaylist={fetchPlaylist} />
        </div>

    </div>
  )
}

export default PlaylistDetails