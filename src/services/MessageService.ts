import axios from '../axios';
import { Message, User } from '../types';

const getAllMessages = () => axios.get<Array<Message>>('/messages');

const addMessage = (friendID: number) => axios.post<Message>('/friends', { friendID });

const MessageService = {
    getAllMessages,
    addMessage,
};

export default MessageService;