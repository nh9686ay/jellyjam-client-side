import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

import FeaturedPlaylist from './FeaturedPlaylist';



function FeaturedPlaylists() {


    // const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
    // const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';
  
    const [featuredPlaylists, setFeaturedPlaylists] = useState([])

    useEffect(() => {
    
        const playlistsFet = async () => {
            const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
                ? "https://jellyjam-server.herokuapp.com/playlist/featured"
                : "playlist/featured" 
            const { data } = await axios.get(url)
            console.log(data)
            
            setFeaturedPlaylists(data)
        }
        playlistsFet()
    }, [])

    //this will be in netlify and .env file
    // REACT_APP_IS_DEPLOYED=true




    if(!featuredPlaylists) {
        return <h1>Loading... New Releases</h1>
    }

    return (
        <div>

            <FeaturedPlaylist featuredPlaylists={featuredPlaylists} />

        </div>
    )
}

export default FeaturedPlaylists