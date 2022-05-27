import axios from '../axios';
import { User } from '../types';

const getAllFriends = (UserID: number) => axios.get<Array<User>>('/friends', { params: { UserID } });

const addFriend = (UserID: number, friendName: string) => axios.post<User>('/friends', { friendName, UserID });

const FriendsService = {
    getAllFriends,
    addFriend,
};

export default FriendsService;