import React from 'react'
import { Link } from 'react-router-dom';
import { SearchIcon } from '../shared/AppIcons'


function SideNav() {
  return (
    <div className="side-nav">
        <div className="home-link-btn" >
            <Link to={'/'} className="link">
                <h1>Home</h1>
            </Link>
        </div>
        <div className="search-link-btn">
            <Link to={'/search'} className="link" >
                <h1><SearchIcon height="2.2rem" width="2.2rem" /> Search</h1>
            </Link>
        </div>
        <div className="library-link-btn" >
            <Link to={'/#'} className="link" >
                <h1>Library</h1>
            </Link>
        </div>
        <div className="create-playlist-link-btn" >
            <Link to={'/#'} className="link" >
                <h1>Create Playlist</h1>
            </Link>
        </div>
        <div className="liked-songs-link-btn" >
            <Link to={'/#'} className="link" >
                <h1>Liked Songs</h1>
            </Link>
        </div>
    </div>
  )
}

export default SideNav