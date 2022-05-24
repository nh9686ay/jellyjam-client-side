import React from 'react'

function AlbumCard({albums}) {
  return (
    <div className='container'>
      {albums ? albums.slice(0, 10).map((album, i) => {
        return (
          <div className='cards' key={i}>
            <h1>Album:{album.name}</h1>
            <img width={"300px"} src={album.images[0].url} alt={album.name} />
            <h2>Artist Name:{album.artists[0].name}</h2>
            {console.log(album)}
          </div>
        )
      })
        : <h2>Search for album</h2>
      }
    </div>
  )
}

export default AlbumCard