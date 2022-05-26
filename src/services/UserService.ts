import axios from '../axios';
import { User } from '../types';

const getAllUsers = () => axios.get<Array<User>>('/users');
const changeStatus = (status: string, UserID: number) => axios.put<User>('/user/status', { status: status, UserID : UserID});

const UserService = { getAllUsers, changeStatus};

export default UserService;
