import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import MessageService from '../../services/MessageService';
import { Message, User } from '../../types';
import useInterval from 'use-interval';
//import CoursesOverviewTable from './CoursesOverviewTable';
import MessageOverviewList from './MessageOverview';
import Status from '../Status/ChangeStatus';
import PublishMessage from './PublishMessage';
import FriendOverview from '../friends';

const MessageOverview: React.FC = () => {
    const token = sessionStorage.getItem('token');
    const JSONtoken = JSON.parse((token) ? token : '{}');
    const userID = (JSONtoken) ? JSONtoken["user"]["user_id"] : null;
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    useEffect(() => {
-        getAllMessages();
    }, []);

    useInterval(() => { getAllMessages();}, 5000 );
    const getAllMessages = async () => {
        const res: AxiosResponse<Array<Message>> = await MessageService.getAllMessages(userID);
        setMessages(res.data);
    };

    return (
        <section className="row justify-content-center">
            <div className='DifferentService'><Status/></div>
            <div className='DifferentService'><PublishMessage/></div>
            <div className='DifferentService'><FriendOverview/></div>
            <div className='DifferentService'>
                <div className="login-wrapper">
                    <h2 className='header2'>Friends Messages</h2>
                    <MessageOverviewList messages={messages}/>
                </div>
            </div>
            {selectedMessage}
        </section>
    );
};

export default MessageOverview;