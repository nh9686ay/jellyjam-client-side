import React, { useState }from 'react';
import axios from 'axios';


function SearchSong({ playlist, fetchPlaylist, setPlaylist }) {

   
  
    const songInitForm = {
        nameSearch: ''
    }

    const [songs, setSongs] = useState()

    const [songForm, setSongForm] = useState(songInitForm)


    const searchChange = (e) => {
        setSongForm({ ...songForm, [e.target.id]: e.target.value })
        console.log(songForm)
    }

    const searchSubmit = async (e) => {
        e.preventDefault()
   
        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
                ? "https://jellyjam-server.herokuapp.com/playlist/searchsong/" + songForm.nameSearch
                : 'http://localhost:5005/playlist/searchsong/' + songForm.nameSearch
       
        const { data } = await axios.get(url)
        console.log(data)
        setSongs(data)
        
    }


    const addSong = async (e) => {
        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
                ? `https://jellyjam-server.herokuapp.com/playlist/addsong/${songs.id}/${playlist._id}`
                : `http://localhost:5005/playlist/addsong/${songs.id}/${playlist._id}`
       
        const { data } = await axios.get(url)
        console.log(data)
        await setPlaylist(data)
        window.location.reload(true);
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
            <form  onSubmit={addSong}>

            <button type="submit" >Add Song</button>
            </form>
         
          
        </div> 
        : null}

    </div>
  )
}

export default SearchSong