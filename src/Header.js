import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StoreIcon from '@material-ui/icons/Store';
import GroupIcon from '@material-ui/icons/Group';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src='https://cdn.iconscout.com/icon/free/png-256/w-characters-character-alphabet-letter-36036.png' alt=''/>
        <div className='search-bar'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header-middle'>
        <div className='shortcut'>
          <HomeRoundedIcon />
        </div>
        <div className='shortcut'>
        <OndemandVideoIcon />
        </div>
        <div className='shortcut'>
          <StoreIcon />
        </div>
        <div className='shortcut'>
          <GroupIcon />
        </div>
        <div className='shortcut'>
          <VideogameAssetIcon />
        </div>
      </div>

      <div className='header-right'>
        <div className='account'>
          <Avatar />
          <h4>Winson</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
