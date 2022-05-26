import React, { useState } from 'react';
import { User } from '../../types';

type Props = {
    users: Array<User>;
    setSelectedUser: (user: User) => void;
};

const UsersOverviewTable: React.FC<Props> = ({ users, setSelectedUser }: Props) => {
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
                {users && (
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
                            {users &&
                                users
                                    .filter(({ name }) =>
                                        name.toLowerCase().includes(nameFilter.toLowerCase())
                                    )
                                    .map((user, index) => (
                                        <tr
                                            className={index === currentIndex ? 'table-active' : ''}
                                            onClick={() => {
                                                setSelectedUser(user);
                                                setCurrentIndex(index);
                                            }}
                                            key={index}
                                            role="button"
                                        >
                                            <td>{user.name}</td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default UsersOverviewTable;
