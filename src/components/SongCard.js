import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/searchpage.css';
import '../assets/css/itemCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SongCard({ songs }) {
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
				{songs.slice(0, 10).map((song, i) => {
					return (
						<Link to={'/#'} className='cards' key={i}>
							<div className='eachCard'>
								<img className='eachCard' height={"200px"} width={"200px"} src={song.album.images[0].url} alt={song.name} />
								<p className='eachCard'>{song.name}</p>
								<p className='eachCard'>{song.artists.name}</p>
								{console.log(song)}
							</div>
						</Link>
					)
				})
				}
			</Slider>
		</div>
	)
}

export default SongCard