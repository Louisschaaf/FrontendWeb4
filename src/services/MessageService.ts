import axios from '../axios';
import { Message, User } from '../types';

const getAllMessages = (UserID: number) => axios.get<Array<Message>>('/messages', { params: { UserID }});
const publishMessage = (UserID: number, text: string, type: string) => axios.post<Message>('/messages', { UserID, text, type});
const MessageService = {getAllMessages, publishMessage, };

export default MessageService;