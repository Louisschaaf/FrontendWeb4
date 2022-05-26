import axios from '../axios';
import { User } from '../types';

const getAllUsers = () => axios.get<Array<User>>('/users');

const UserService = { getAllUsers,};

export default UserService;
