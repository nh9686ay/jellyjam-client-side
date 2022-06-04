import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

import FeaturedPlaylist from './FeaturedPlaylist';



function FeaturedPlaylists() {


    const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
    const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';
  
    const [featuredPlaylists, setFeaturedPlaylists] = useState([])

    useEffect(() => {
       
        async function fetchData(e) {
         
          const params = new URLSearchParams();
          params.append('grant_type', 'client_credentials');
          const res = await axios.post('https://accounts.spotify.com/api/token', params, {
            headers: {
              'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
              'Content-Type': "application/x-www-form-urlencoded"
            },
          })
          console.log(res.data.access_token)
        //   await setToken(res.data.access_token)
  
          const token = res.data.access_token
          const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
              headers: {
                  'Authorization': `Bearer ${token}`
              },
              params: {
                  // q: searchKey,
                  // type: 'album'
              }
          })
          console.log(data)
          setFeaturedPlaylists(data.playlists.items)
          
      }
      fetchData();
      
  }, [])
  


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