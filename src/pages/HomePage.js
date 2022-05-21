import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';

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
        
    </div>
  )
}

export default HomePage