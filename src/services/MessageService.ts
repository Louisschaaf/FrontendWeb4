import axios from '../axios';
import { Message, User } from '../types';

const getAllMessages = (UserID: number) => axios.get<Array<Message>>('/messages', { params: { UserID }});

const addMessage = (friendID: number) => axios.post<Message>('/friends', { friendID });

const MessageService = {
    getAllMessages,
    addMessage,
};

export default MessageService;