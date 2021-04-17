import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';


function Sidebar() {
  const user = {}
  return (
    <div className='Sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow icon={LocalHospitalIcon}
      title='COVID-19 Information Center'/>
      <SidebarRow icon={PeopleIcon} title='Friends'/>
      <SidebarRow icon={FlagIcon} title='Pages'/>
      <SidebarRow icon={SupervisedUserCircleIcon} title='Groups'/>
      <SidebarRow title='Friends'/>
      <SidebarRow title='Pages'/>
      <SidebarRow title='Groups'/>
    </div>
  )
}

export default Sidebar
