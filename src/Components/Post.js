import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className='post-top'>
        <Avatar className='post-avatar' src={profilePic}/>
        <div className='post-top-info'>
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className='post-bottom'>
        <p>{message}</p>
      </div>

      <div className='post-image'>
        <img src={image} alt='' />
      </div>

      <div className='post-options'>
        <div className='post-option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post-option'>
          <ChatBubbleIcon />
          <p>Comment</p>
        </div>
        <div className='post-option'>
          <ShareIcon />
          <p>Share</p>
        </div>


      </div>

    </div>
  )
}

export default Post
