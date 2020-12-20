import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; 

function Header() {
    return (
        <div className="header">
            <h1>This is the header component</h1>

            <div className="header_left">
                <img src="" alt=""/>

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