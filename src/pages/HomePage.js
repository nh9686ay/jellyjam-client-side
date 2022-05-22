import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import NewAlbums from '../components/new-albums/NewAlbums';

function HomePage() {
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
        
    </div>
  )
}

export default HomePage