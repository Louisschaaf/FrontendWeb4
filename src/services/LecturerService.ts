import axios from '../axios';
import { User } from '../types';

const getAllLecturers = () => axios.get<Array<Lecturer>>('/users');

const LecturerService = {
    getAllLecturers,
};

export default LecturerService;
