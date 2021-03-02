import React from 'react'
import {Avatar} from '@material-ui/core'
import './MakePost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';

function MakePost({ profile, image, name, timestamp, message}) {
  
    return (
        <div className="MakePost">
      <div className="MakePost__top">
        <Avatar src={profile} className="MakePost__avatar" />
        <div className="MakePost__topInfo">
          <h3>{name}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="MakePost__bottom">
        <p>{message}</p>
      </div>
      <div className="MakePost__image">
        <img src={image} alt="" />
      </div>

      <div className="MakePost__options">
        <div className="MakePost__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="MakePost__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="MakePost__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="MakePost__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
    )
}

export default MakePost
