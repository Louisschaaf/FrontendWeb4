import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import LecturerService from '../../services/LecturerService';
import { User } from '../../types';
import CoursesOverviewTable from './CoursesOverviewTable';
import LecturersOverviewTable from './LecturersOverviewTable';

const LecturerOverview: React.FC = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [selectedLecturer, setSelectedLecturer] = useState<User | null>(null);

    useEffect(() => {
        getLecturers();
    }, []);

    const getLecturers = async () => {
        const res: AxiosResponse<Array<User>> = await LecturerService.getAllLecturers();
        setUsers(res.data);
    };

    return (
        <section className="row justify-content-center">
            <LecturersOverviewTable
                users={users}
                setSelectedLecturer={setSelectedLecturer}
            />
            {selectedLecturer && selectedLecturer.courses && (
                <CoursesOverviewTable courses={selectedLecturer.courses} />
            )}
        </section>
    );
};

export default LecturerOverview;
