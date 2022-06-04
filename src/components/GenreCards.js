import { withTheme } from '@emotion/react';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const colorArray = [
  '#8D67AB',
  '#1E3264',
  '#E8245A',
  '#35856A',
  '#BA5D07',
  '#E13301',
  '#509BF5',
  '#777777',
  '#E1218B',
  '#B49BC8',
  '#EE37A5',
  '#9CF0E1',
  '#F7C864',
  '#A56752',
  '#477D95',
  '#368A08',
  '#EB2531',
  '#D7F27D',
  '#8C1932',
  '#BA5D07',
  '#3173EC',
  '#F39B23'
]

function GenreCards({ genres }) {
  return (
    <div className="genreContainer">
      {genres ? genres.map((genre, i) => {
        const randomNum = Math.floor(Math.random() * 20)

        return (
          // <Link to={'/#'} className='eachGenre' key={i}>

          <div 
            style={{ backgroundColor: colorArray[randomNum] }} 
            className='eachGenre' 
            key={i}>
            <p>{genre}</p>
          </div>
          // </Link>
        )
      })
        : <h2>Loading...</h2>
      }
    </div>
  )
}

export default GenreCards;