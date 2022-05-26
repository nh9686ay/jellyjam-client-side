import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import NewAlbums from '../components/carousels/new-albums/NewAlbums';
import FeaturedPlaylists from '../components/carousels/featured-playlists/FeaturedPlaylists';

function HomePage() {
  const [toggleMenu, setToggleMenu] = useState("");

  const toggleMobileMenu = function(){
    setToggleMenu(toggleMenu == "" ? "active" : "");
  };

  return (
    <div>
        <div className="navWrap">
            <div className="logo-section">
                <h3>JellyJam</h3>
                {/* <div className="search-container">
                    <Link to="/search">
                    <button>Search</button>
                    </Link>
                </div> */}
                <div className="mobile_menu" onClick={toggleMobileMenu}>
                    <div className="dash_line"></div>
                    <div className="dash_line"></div>
                    <div className="dash_line"></div>
                </div>
            </div>
            <SideNav toggleMenu={toggleMenu} />
        </div>
        <div className="mainSection">
            <NewAlbums />
            <FeaturedPlaylists />
        </div>
    </div>
  )
}

export default HomePage