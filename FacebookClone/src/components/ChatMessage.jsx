import React from 'react'
import {Avatar} from '@material-ui/core'
import {useStateValue} from '../StateProvider'
// import db from './firebase'
import './ChatMessage.css'
function ChatMessage({timestamp,messages,profile}) {
    const [{user}] = useStateValue();

    return (
        <div className="ChatMessage" >
            <div className="Chatmessage__profile">
                <Avatar style={{width:30,height:30}} src={profile}/>
                {/* <p >{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                <p>{messages}</p>
            </div>
        </div>
    )
}

export default ChatMessage
