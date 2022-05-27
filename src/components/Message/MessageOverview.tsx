import React, { useState } from 'react';
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
                <ul className='messageList'>
                {messages &&
                    messages
                    .map((message, index) => (
                        <li className='post'>
                            <p>user says: </p>
                            <p>{message.text}</p>
                            <p>sent: {message.date_sent}</p>

                        </li>
                    ))}
                </ul>
            
            </div>
        </>
    );
};

export default MessageOverviewList;