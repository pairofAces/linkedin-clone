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
        </div>
    )
}

export default Sidebar
