import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css';

function Sidebar() {
    //import the user with redux
    const user = useSelector(selectUser);


    //create a funciton 'recentItem' for the "Recent" section in sidebar
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
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
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("programming")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar;