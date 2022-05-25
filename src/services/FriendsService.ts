import axios from '../axios';
import { User } from '../types';

const getAllFriends = (UserID: number) => axios.get<Array<User>>('/friends', { params: { UserID } });

const addFriend = (friendID: number) => axios.post<User>('/friends', { friendID });

const FriendsService = {
    getAllFriends,
    addFriend,
};

export default FriendsService;