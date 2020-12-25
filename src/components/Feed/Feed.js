import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';

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
                <div className="feed_inputOptions">
                    {/* this will be where the input options are, for example,
                    if I want to include a pic or a link, etc... */}
                    <InputOption Icon={ImageIcon} title="Photo" color="#7085F9"/>
                </div>
            </div>
        </div>
    )
}

export default Feed
