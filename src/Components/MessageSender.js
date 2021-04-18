import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function MessageSender() {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)

    setInput('')
    setImageUrl('')
  }

  return (
    <div className='messageSender'>
      <div className='messageSender-top'>
        <Avatar />
        <form>
          <input type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?" />
          <input type='text'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder='image URL (Optional)' />
          <button onClick={handleSubmit} type='submit'>Hidden submit</button>
        </form>
      </div>

      <div className='messageSender-bottom'>
        <div className='messageSender-option'>
          <VideocamIcon style={{ color: 'red'}} />
          <h3>Live Video</h3>
        </div>

        <div className='messageSender-option'>
          <PhotoLibraryIcon style={{ color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>

        <div className='messageSender-option'>
          <EmojiEmotionsIcon style={{ color: 'yellow'}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
