import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StarIcon from '@material-ui/icons/Star';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <SidebarRow src='https://image.flaticon.com/icons/png/128/3033/3033143.png' title='Winson' />
      <SidebarRow Icon={LocalHospitalIcon}
      title='COVID-19 Information Center'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={StarIcon} title='Favorites'/>
      <SidebarRow Icon={FlagIcon} title='Pages'/>
      <SidebarRow Icon={SupervisedUserCircleIcon} title='Groups'/>
      <SidebarRow Icon={StoreIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
    </div>
  )
}

export default Sidebar
