import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/searchpage.css';
import '../assets/css/itemCarousel.css';
import '../assets/css/darkmode.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function ArtistCard({artists}) {
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
      {artists.length > 0 ? artists.slice(0, 10).map((artist, i) => {
        return (
          <Link to={'/#'} className='cards' key={i}>
            <div className="eachCard">
              {
                artist.images.length ? <img className='eachCard' width={"200px"} height={"200px"}src={artist.images[0].url} alt={artist.name} />
                : <img width={"200px"} src={'public/defaultartist.png'} alt='default'/>
              }
              <p className='eachCard'>{artist.name}</p>
              {/* <h3>{artist.followers.total}</h3> */}
              {/* <a href={artist.external_urls.spotify} >Link to Spotify</a> */}
              {/* {console.log(artists)} */}
           </div>
          </Link>
        )
      })
        : <h2>Search for artist</h2>
      }
      </Slider>
    </div>
  )
}

export default ArtistCard