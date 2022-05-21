import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  


    const CLIENT_ID = 'e453b26fcf06407d9e3640b7ad74cd48';
    // const clientSecret = '2d01679727954cbbbf682a070d7c9949';
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'


    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState('')
    const [artists, setArtists] = useState([])
    const [albums, setAlbums] = useState([])


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split('=')[1]
            console.log(token)

            window.location.hash = ''
            window.localStorage.setItem('token', token)
            
        }
        setToken(token)

    }, [])


    const logout = () => {
        setToken('')
        window.localStorage.removeItem('token')
    }

    
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", { 
            headers: { 
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        console.log(data)
        setArtists(data.artists.items)
        
        const searchAlbums = async () => {
            e.preventDefault()
            
            const {data} = await axios.get("https://api.spotify.com/v1/search", { 
                headers: { 
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchKey,
                    type: "album"
                }
            })
            console.log(data)
            setAlbums(data.albums.items)
        }
        searchAlbums()
    }
    



  
  
  

  return (
    <div className="App">
        <h1>SPOTIFYYY!!!!</h1>

        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login to Spotify</a>
        : <button onClick={logout}>Logout</button>}


        {token ?
            <form onSubmit={searchArtists}>
                <input type="text" placeholder="Search for artist" onChange={e => setSearchKey(e.target.value)} />
                <button type={"submit"} >Search</button>
            </form>
            : <h2>Please Login</h2>
        }

        {artists ? artists.slice(0, 3).map(artist => {
                return (
                    <div>
                        <h1>{artist.name}</h1>
                        <h3>{artist.followers.total}</h3>
                        <a href={artist.external_urls.spotify} >Link to page</a>
                        <br></br>
                    {
                        artist.images.length ? <img width={"300px"} src={artist.images[0].url} alt='' /> 
                        : <div>No Images</div>
                    } 
                    {/* {console.log(artist)} */}
                    </div>
                    
                    )
                })
                : <h2>Search for artist</h2>
                }
        {albums ? albums.slice(0, 3).map(album => {
                return (
                    <div>
                        <h1>{album.name}</h1>
                        {/* <h3>{album.followers.total}</h3>
                        <a href={album.external_urls.spotify} >Link to page</a>
                        <br></br>
                    {
                        album.images.length ? <img width={"300px"} src={album.images[0].url} alt='' /> 
                        : <div>No Images</div>
                    }  */}
                    {console.log(album)}
                    </div>
                    
                    )
                })
                : <h2>Search for artist</h2>
                }

    </div>
  );
}

export default App;
