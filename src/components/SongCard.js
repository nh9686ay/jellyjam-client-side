import React from 'react'

function SongCard({ songs }) {
	return (
		<div>
			<div className='container'>
				{songs.slice(0, 10).map((song, i) => {
					return (
						<div className='cards' key={i}>
							<h1>{song.name}</h1>
							<img width={"300px"} src={song.album.images[0].url} alt={song.name} />
							<h2>{song.artists.name}</h2>
							{console.log(song)}
						</div>
					)
				})
				}
			</div>
		</div>
	)
}

export default SongCard