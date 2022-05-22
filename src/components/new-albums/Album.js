import React from 'react'
import { Link } from 'react-router-dom';
import '../../itemCarousel.css';


function Album({ albums }) {
  return (
    <div>
        <div className="new-albums">
                {
                    albums.slice(0, 4).map((album, i) => {
                        return (
                            //link to album page by id
                            <Link to={'/#'} key={i}>
                                <div key={i} className="album" >
                                    <h2>{album.name}</h2>
                                    {album.images.length && <img src={album.images[1].url} />}
                                </div>
                            </Link>
                            
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Album