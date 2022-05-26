import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import MessageService from '../../services/MessageService';
import { Message, User } from '../../types';
//import CoursesOverviewTable from './CoursesOverviewTable';
import MessageOverviewList from './MessageOverview';
import Status from '../Status/ChangeStatus';

const MessageOverview: React.FC = () => {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const JSONtoken = JSON.parse((token) ? token : '{}');
    console.log("JSONtoken: ", JSONtoken);
    const userID = (JSONtoken) ? JSONtoken["user"]["user_id"] : null;
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    console.log("userID: ", userID);
    useEffect(() => {
-        getAllMessages();
    }, []);

    const getAllMessages = async () => {
        const res: AxiosResponse<Array<Message>> = await MessageService.getAllMessages(userID);
        console.log("messages:",res);
        setMessages(res.data);
    };

    return (
        <section className="row justify-content-center">
            <div className='DifferentService'><Status/></div>
            <div className='DifferentService'>
                <MessageOverviewList messages={messages}/>
            </div>
            {selectedMessage}
        </section>
    );
};

export default MessageOverview;