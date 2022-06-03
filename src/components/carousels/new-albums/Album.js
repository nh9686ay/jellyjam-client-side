import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import '../../../assets/css/itemCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import AlbumById from '../../../pages/AlbumById';


function Album({ albums }) {


    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed:400,
        slidesToShow: 4,
        arrows: true,
        slidesToStroll: 1,
        className: "slides"
    }


  return (
      
    <div>
   

        {/* <div > */}
        <div className="new-albums">
            <Slider {...settings}>
            
                {
                    albums.slice(0, 10).map((album, i) => {
                        return (
                            <Link to={`/album/${album.id}`} key={i} className="link">

                                <div key={i} className="album" >
                                    {album.images.length && <img id = {album.id[1]} className="album-img" src={album.images[1].url} />}
                                </div>
                                <div>
                                    <h2>{album.name}</h2>
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

export default Album