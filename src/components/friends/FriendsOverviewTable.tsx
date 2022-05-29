import React, { useState } from 'react';
import { User } from '../../types';

type Props = {
    friends: Array<User>;
    //setSelectedFriend: (friend: User) => void;
};

const FriendsOverviewTable: React.FC<Props> = ({ friends }: Props) => {
    const [nameFilter, setNameFilter] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    return (
        <>
            <div className="w-100 d-none d-md-block" />
            <div className="col-6">
                {friends.length != 0 ? (             
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {friends &&
                                friends
                                    .map((friend, index) => (
                                        <tr
                                            className={index === currentIndex ? 'table-active' : ''}
                                            onClick={() => {
                                                //setSelectedFriend(friend);
                                                setCurrentIndex(index);
                                            }}
                                            key={index}
                                            role="button">
                                            <td>{friend.name}</td>
                                            <td>{friend.status}</td>
                                        </tr>))}
                        </tbody>
                    </table>
                ): ( <p>No friends added yet</p>)
                }
            </div>
        </>
    );
};

export default FriendsOverviewTable;