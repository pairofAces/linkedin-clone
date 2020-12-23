import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="" alt=""/>
                <Avatar />
                <h2>Karan S. Chauhan</h2>
                <h4>karanchauhan16@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                {/* now I'll create individual stat divs for each stat
                I want to display */}
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">1,738</p>
                </div>
                <div className="sidebar_stat">
                    <p>Connections</p>
                    <p className="sidebar_statNumber">9,000+</p>
                </div>

                <div className="sidebar_bottom">
                    <p>Recent</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;