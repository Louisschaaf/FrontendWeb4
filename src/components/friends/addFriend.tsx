import React, { useState } from 'react';
import { User } from '../../types';
import axios, { AxiosResponse } from 'axios';
import FriendsService from '../../services/FriendsService';

const AddFriend: React.FC = () => {
  const token = sessionStorage.getItem('token');
  const JSONtoken = JSON.parse((token) ? token : '{}');
  const UserID = (JSONtoken) ? JSONtoken["user"]["user_id"] : null;
  const [friend, setFriend] = useState<User>();
  const [friendName, setFriendName] = useState<string>();

  const addFriend = async (name: string) => {
    const res: AxiosResponse<User> = await FriendsService.addFriend(UserID, name);
    setFriend(res.data);
};

    const handleStatusSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (friendName) {
            addFriend(friendName);
            
        }
        
    };

  return(
    <div className="login-wrapper">
      <h1>Friends</h1>
      <form onSubmit={handleStatusSubmit} className='addFriendInput'>
        <label>
            <input type="text"  maxLength={30} placeholder={"Name"} 
            onChange={(event) => setFriendName(event.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default AddFriend;