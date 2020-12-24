import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';

function Feed() {
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
            </div>
        </div>
    )
}

export default Feed
