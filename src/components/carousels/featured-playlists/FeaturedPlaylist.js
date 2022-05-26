import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/itemCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function FeaturedPlaylist({ featuredPlaylists }) {


    
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
    <div>
      <div className="featured-playlists">
        <Slider {...settings}>
          {
            featuredPlaylists.slice(0, 10).map((playlist, i) => {
              return (
                //link to album page by id
                <Link to={'/#'} key={i} className="link">
                  <div>
                    <h2>{playlist.name}</h2>
                  </div>
                  <div key={i} className="playlist" >
                    {playlist.images && <img className="playlist-img" src={playlist.images[0].url} />}
                  </div>
                </Link>
              )
            })
          }
        </Slider>
      </div>

    </div>
  )
}

export default FeaturedPlaylist