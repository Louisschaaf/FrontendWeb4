import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import FriendsService from '../../services/FriendsService';
import { User } from '../../types';
import AddFriend from './addFriend';
//import CoursesOverviewTable from './CoursesOverviewTable';
import FriendsOverviewTable from './FriendsOverviewTable';

const FriendOverview: React.FC = () => {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const JSONtoken = JSON.parse((token) ? token : '{}');
    console.log("JSONtoken: ", JSONtoken);
    const userID = (JSONtoken) ? JSONtoken["user"]["user_id"] : null;
    const [friends, setFriends] = useState<Array<User>>([]);
    const [selectedFriend, setSelectedFriend] = useState<User | null>(null);
    console.log("userID: ", userID);
    useEffect(() => {
-        getFriends();
    }, []);

    const getFriends = async () => {
        const res: AxiosResponse<Array<User>> = await FriendsService.getAllFriends(userID);
        console.log("friends:",res);
        setFriends(res.data);
    };
    

    return (
        <div id='pane3' className='DifferentService'>
            <section className="row justify-content-center">
            <AddFriend/>
            <FriendsOverviewTable
                friends={friends}
                setSelectedFriend={setSelectedFriend}
            />
            {selectedFriend}
        </section>
        </div>
        
    );
};

export default FriendOverview;