import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

import Album from './Album';




function NewAlbums() {


    const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
    const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';
  
    const [token, setToken] = useState("")
    const [albums, setAlbums] = useState([])
  

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
        await setToken(res.data.access_token)

        const token = res.data.access_token
        const { data } = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                // q: searchKey,
                // type: 'album'
            }
        })
        console.log(data)
        setAlbums(data.albums.items)
        
        
        
    }
    fetchData();
    
    
}, [])






    if(!albums) {
        return <h1>Loading... New Releases</h1>
    }

    return (
        <div >
            
            <Album albums={albums} />

        </div>
    )
}

export default NewAlbums