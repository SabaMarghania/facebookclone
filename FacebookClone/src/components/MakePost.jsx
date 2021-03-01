import React from 'react'
import {Avatar} from '@material-ui/core'
import './MakePost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import firebase,{db} from './firebase'
import { useStateValue } from '../StateProvider';

function MakePost({message,image,timestamp}) {
  const[{user},dispatch] = useStateValue();
  
    return (
        <div className="MakePost">
      <div className="MakePost__top">
        <Avatar src={user.photoURL} className="MakePost__avatar" />
        <div className="MakePost__topInfo">
          <h3>{user.displayName}</h3>
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
