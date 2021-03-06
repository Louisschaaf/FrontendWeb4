import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from 'axios';

//export default function Login({ setToken }: { setToken: (token: any) => void }) {
const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    
    const loginUser = async ( username: string) => {
       try {
           const res = await axios.post<Response>('http://localhost:3000/user/login', {name: username});
           sessionStorage.setItem('token', JSON.stringify(res.data));
           window.location.reload();
           return {status: 'success'};
       } catch (error: any) {
         alert("Wrong Username Entered")
           return error;
       }
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let token = await loginUser(username);
        if (token["status"] === "error") {
            alert("Wrong username or password");
            token = "error";
        }
    };

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Login;