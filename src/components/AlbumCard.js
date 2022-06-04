import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/searchpage.css';
import '../assets/css/itemCarousel.css';
import '../assets/css/darkmode.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function AlbumCard({ albums }) {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    arrows: true,
    slidesToStroll: 1,
    className: "slides"
  }
  return (
    <div className='sliderContainer'>
      <Slider {...settings}>
        {albums ? albums.slice(0, 10).map((album, i) => {
          return (
            <Link to={'/#'} className='cards' key={i}>
              <div className='eachCard'>
                <img className='eachCard' height={"200px"} width={"200px"} src={album.images[0].url} alt={album.name} />
                <p className='eachCard'>{album.name}</p>
                <p className='eachCard'>By: {album.artists[0].name}</p>
                {/* {console.log(album)} */}
              </div>
            </Link>
          )
        })
          : <h2>Search for album</h2>
        }
      </Slider>
    </div>
  )
}

export default AlbumCard