import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import NewAlbums from '../components/carousels/new-albums/NewAlbums';
import FeaturedPlaylists from '../components/carousels/featured-playlists/FeaturedPlaylists';
import SignUpButton from '../components/header/SignUpButton';
import Header from '../components/header/Header';

function HomePage() {

    useEffect(() => {
		fetch("/user")
		.then(
			res => res.json()
		)
		.then(
			data => {
				
				console.log(data);
			}
		)
	}, [])


  return (
    <div>

        <header id = "homePageHeaderContainer"><Header />
  
        </header>


        <SideNav />
        <div>
            <NewAlbums />
        </div>
        <div>
            <FeaturedPlaylists />
        </div>
        
    </div>
  )
}

export default HomePage