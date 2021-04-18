import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
      key='1'
      profilePic='https://image.flaticon.com/icons/png/128/3033/3033143.png'
      message='hello there'
      timestamp='this is a timestamp'
      username='chanw'
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyNtCM2SBewRilvmRiBDM5uPsXV7jb6KeBw&usqp=CAUU'
      />
      <Post
      key='2'
      profilePic='https://image.flaticon.com/icons/png/128/3033/3033143.png'
      message='hello there'
      timestamp='this is a timestamp'
      username='chanw'
      />
    </div>
  )
}

export default Feed
