import React, { useState } from 'react';
import UserService from '../../services/UserService';
import { Message } from '../../types';
import "./message.css";

type Props = {
    messages: Array<Message>;
};



const MessageOverviewList: React.FC<Props> = ( {messages}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    return (
        <>
            <div className="w-100 d-none d-md-block" />
            <div id='messages'>
            {messages.length != 0 ? (
                <ul className='messageList'>
                {messages &&
                    messages
                    .map((message, index) => (
                        <li className='post'>
                            <p>{message.username} says: </p>
                            <p>{message.text}</p>
                            <p>sent: {message.date_sent}</p>

                        </li>
                    ))}
                </ul>) : 
        <p>Your friends have been quiet lately…</p>
        }
        </div>
        </>
    );
};

export default MessageOverviewList;