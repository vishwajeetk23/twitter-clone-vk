import React, {useState, useEffect} from 'react';

import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';


 
function Feed() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot=> (setPosts(snapshot.docs.map(doc => doc.data)))
        )
    }, [])

    return (
        <div className="feed">
            {/* Header*/}
            <div className="feed__header">
                <h2 >Home se</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/* Post */}
            <Post displayName="Clever Programmer" 
            verified={true}
    
            text="I Challege you to build a Twitter CLone with React.js"
            image="https://i.ytimg.com/an_webp/hggGvwA_tcc/mqdefault_6s.webp?du=3000&sqp=COT0yI0G&rs=AOn4CLD5WXdIHG-YxwHnb8Dxq5gturfzow"
            avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            />
        </div>
    )
}

export default Feed
