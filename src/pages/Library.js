import React from 'react';
import Playlists from '../components/library/Playlists';
import SideNav from '../components/SideNav';

function Library() {
  return (
    <div>
      <div className='navWrap'>
        <SideNav />
      </div>
        {/* <h1>Library</h1> */}
        <div className='playlistLi'>
          <Playlists />
        </div>
    </div>
  )
}

export default Library