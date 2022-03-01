import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubcriptionIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
  return (
    <div className='sidebar'>

        <SidebarRow selected Icons={HomeIcon} title="Home"/>
        <SidebarRow Icons={WhatshotIcon} title="Explore"/>
        <SidebarRow Icons={SubcriptionIcon} title="Subscription"/>
        <hr />
        <SidebarRow Icons={VideoLibraryIcon} title="Library"/> 
        <SidebarRow Icons={HistoryIcon} title="History"/>
        <SidebarRow Icons={OndemandVideoIcon} title="Your videos"/>
        <SidebarRow Icons={WatchLaterIcon} title="Watch later"/>
        <SidebarRow Icons={ThumbUpAltOutlinedIcon} title="Liked videos"/>
        <SidebarRow Icons={ExpandMoreOutlinedIcon} title="Show more"/>
        <hr />

    </div>
  )
}

export default Sidebar