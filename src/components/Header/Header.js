import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; 

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
            
            </div>     
        </div>
    )
}

export default Header;