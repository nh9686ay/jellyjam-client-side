import React from 'react';
import { Link } from 'react-router-dom';

function GenreCards({ genres }) {

  return (
    <div className="genreContainer">
    {genres ? genres.map((genre, i) => {
      return (
          <Link to={'/#'} className='link' key={i}>
            
            <div className='eachGenre'>
              <p>{genre}</p>
            </div>
          </Link>
        )
      })
      : <h2>Loading...</h2>
    }
    </div>
  )
}

export default GenreCards;