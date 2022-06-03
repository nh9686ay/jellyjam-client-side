import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { useParams } from "react-router-dom";
import '../assets/css/albumById.css';
import Header from "../components/header/Header";
import SideNav from "../components/SideNav";
function AlbumById() {
  const urlParams = useParams();
  const client_id = "638824d8d1cf48bca579d7fa24c5ac40";
  const client_secret = "cb118a82d49d4d51b6f2e5ecefed9085";

  const [token, setToken] = useState("");
  const [album, setAlbum] = useState(null);
 



  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + " min " + (seconds < 10 ? '0' : '') + seconds + " sec";
  }
  useEffect(() => {
    
    async function fetchData(e) {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      const res = await axios.post(
        `https://accounts.spotify.com/api/token`,
        params,
        {
          headers: {
            Authorization:
              "Basic " +
              new Buffer.from(client_id + ":" + client_secret).toString(
                "base64"
              ),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(res.data.access_token);
      await setToken(res.data.access_token);

      const token = res.data.access_token;
      const { data } = await axios.get(
        `https://api.spotify.com/v1/albums/${urlParams.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
     
          },
        }
        
      );

      console.log(data);
 
      setAlbum(data);
 
    }
    fetchData();
  }, []);

 

  return album && (
    
  <div >
    <Header />
    <div id ="albumConentConatiner">
       <div id="albumImgContainer">
      <img src ={album.images[1].url}/>
    </div>
    <div id = "allAlbumInfoContainer">
    <h2 id = "albumType">{album.album_type}</h2>
    <h1>{album.name}</h1>
    <div id = "albumInfoContainer"> 
    <li id = "albumArtists">{album.artists.map((artist)=>{
      return <li id ="albumArtists"> {artist.name}</li>
    })}</li>
    <li>{album.release_date.substr(0,4)}</li>
    <li>{album.total_tracks} songs,</li>
    <li id = "runtime">{millisToMinutesAndSeconds(album.tracks.items[0].duration_ms)}</li>
    </div>
    </div>
    <div id = "albumTracksContainer">
      <ul class = "albumTracks">{album.tracks.items.map((item)=>{
        return   <li id ="singleTrack">{item.name}</li>
      })}

      </ul>
    </div>
    <div className="navWrap">
    <SideNav/>
    </div>
    </div>
    </div>
    
    );
  
}
export default AlbumById;
