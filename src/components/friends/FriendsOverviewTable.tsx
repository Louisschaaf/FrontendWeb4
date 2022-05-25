import React, { useState } from 'react';
import { User } from '../../types';

type Props = {
    friends: Array<User>;
    setSelectedFriend: (friend: User) => void;
};

const FriendsOverviewTable: React.FC<Props> = ({ friends, setSelectedFriend }: Props) => {
    const [nameFilter, setNameFilter] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    return (
        <>
            <div className="col-4 mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Filter by name"
                    onChange={(event) => setNameFilter(event.target.value)}
                />
            </div>
            <div className="w-100 d-none d-md-block" />
            <div className="col-6">
                {friends && (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th className="text-center" scope="col">
                                    LoggedIn
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {friends &&
                                friends
                                    .filter(({ name }) =>
                                        name.toLowerCase().includes(nameFilter.toLowerCase())
                                    )
                                    .map((friend, index) => (
                                        <tr
                                            className={index === currentIndex ? 'table-active' : ''}
                                            onClick={() => {
                                                setSelectedFriend(friend);
                                                setCurrentIndex(index);
                                            }}
                                            key={index}
                                            role="button"
                                        >
                                            <td>{friend.name}</td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default FriendsOverviewTable;