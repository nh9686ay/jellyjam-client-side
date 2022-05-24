import React from 'react';
import '../grid.css'


function ArtistCard({artists}) {
  return (
    <div className='container'>
    <div className='container'>

      {artists.length > 0 ? artists.slice(0, 15).map((artist, i) => {
        return (
          <div className='cards' key={i}>
            <h1>{artist.name}</h1>
            {
              artist.images.length ? <img width={"200px"} height={"200px"}src={artist.images[0].url} alt={artist.name} />
                : <img width={"200px"} src={'public/defaultartist.png'} alt='default'/>
            }
            <h3>{artist.followers.total}</h3>
            <a href={artist.external_urls.spotify} >Link to Spotify</a>
           {/* {console.log(artists)} */}
           </div>
        )
      })
        : <h2>Search for artist</h2>
      }
    </div>
    </div>
  )
}

export default ArtistCard