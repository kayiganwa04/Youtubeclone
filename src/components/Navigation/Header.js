import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <MenuIcon />
            <img className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png'alt='youtube'/>
        </div>
        
        <div className='header__input'>
             <input placeholder='Search' type='text'/>
            <SearchIcon className='header__inputButton'/> 
        </div>
        <Avatar 
            className='header__inputMic'
            alt='Kayiganwa' 
            src='https://www.mcicon.com/wp-content/uploads/2021/01/xMusic_Microphone_1-copy-4-600x600.jpg.pagespeed.ic.TLlCgrpMrq.webp'
            />
        <div className='header'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar 
            alt='Kayiganwa' 
            src='https://media-exp1.licdn.com/dms/image/C4D03AQGQ0YR5xRoBzw/profile-displayphoto-shrink_200_200/0/1644012778232?e=1651104000&v=beta&t=l4GTQwE_r3iiXbqrv5Xr9YCGMUk_racWwBpthFMdy0c'
            /> 
        </div>
        
    </div>
  )
}

export default Header