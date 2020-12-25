import React, { useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';


function Feed() {
    const [posts, setPosts] = useState([]);

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                {/* this is where I will create the individual 
                inputs within the top feed section */}
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    {/* this will be where the input options are, for example,
                    if I want to include a pic or a link, etc... */}
                    <InputOption Icon={ImageIcon} title="Photo" color="#7085F9"/>
                    <InputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalenderViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {/* this is where the posts will be */}
            {posts.map((post) => {
                <Post />
            })}
            <Post name="Karan S. Chauhan" description="this is a test" message="this is working"/>
        </div>
    )
}

export default Feed
