import React, { useState }from 'react';
import axios from 'axios';

function SearchSong() {

    const songInitForm = {
        nameSearch: ''
    }

    const [songs, setSongs] = useState()

    const [songForm, setSongForm] = useState(songInitForm)
    const [searchkey, setSearchKey] = useState()

    const searchChange = (e) => {
        setSongForm({ ...songForm, [e.target.id]: e.target.value })
        console.log(songForm)
    }

    const searchSubmit = async (e) => {
        e.preventDefault()
        await setSearchKey(songForm)

        console.log(searchkey)
        // const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
        //         ? "https://jellyjam-server.herokuapp.com/playlist/createplaylist"
        //         : "/playlist/createplaylist" 
       
        const { data } = await axios.get('http://localhost:5005/playlist/searchsong/' + searchkey.nameSearch)
        console.log(data)
        setSongs(data)
        
    }


    const addSong = async (e) => {
        //post route here to add song to playlist
    }
    

  return (
    <div>
        <h3>Search Song</h3>

        <form onSubmit={searchSubmit}>
            <label htmlFor="image_url">Name: </label>
            <input type="text" id="nameSearch" value={songForm.nameSearch} onChange={searchChange}></input>
            <br></br>

 
            <button type="submit">Search</button>
        </form>

        {songs ? 
        <div>
            <h4>{songs.name}</h4>
            <img src={songs.album.images[1].url} />
            <br></br>
            <button onClick={addSong}>Add Song</button>
        </div> 
        : null}

    </div>
  )
}

export default SearchSong