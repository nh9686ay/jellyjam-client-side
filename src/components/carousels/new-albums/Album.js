import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/itemCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


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
                            //link to album page by id
                            <Link to={'/#'} key={i} className="link">
                                <div>
                                    <h2>{album.name}</h2>
                                </div>
                                <div key={i} className="album" >
                                    {album.images.length && <img className="album-img" src={album.images[1].url} />}
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