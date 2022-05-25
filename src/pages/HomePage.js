import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import NewAlbums from '../components/carousels/new-albums/NewAlbums';
import FeaturedPlaylists from '../components/carousels/featured-playlists/FeaturedPlaylists';

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

        <h1>JellyJam</h1>
        <div className="search-container">
            <Link to="/search">
            <button>Search</button>
            </Link>
        </div>

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