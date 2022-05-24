import axios from '../axios';
import { User } from '../types';

const getAllLecturers = () => axios.get<Array<User>>('/users');

const LecturerService = {
    getAllLecturers,
};

export default LecturerService;
