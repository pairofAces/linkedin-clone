import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../Firebase/Firebase';
import firebase from 'firebase';


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        // working on getting firebase integrated at this point
        // to handle the posts 'backend'

        db.collection('posts').add ({
            name: "Karan S. Chauhan",
            description: "This is a test, let's see if this works",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input  value={ input } onChange={(e) => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
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
