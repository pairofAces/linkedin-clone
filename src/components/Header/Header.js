import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; 
import HeaderOption from './headerOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
    return (
        <div className="header"> 
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="header_search">
                    {/* search icon from material UI */}
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon } title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            </div>     
        </div>
    )
}

export default Header;