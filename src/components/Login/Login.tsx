import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials: { username: string; }) {
    return fetch('http://localhost:3306/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(response => response.json())
    
}

export default function Login({ setToken }: { setToken: (token: string) => void }) {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(username);
        let token = await loginUser({username});
        if (token["status"] === "error") {
            alert("Wrong username or password");
            token = "error";
        }
        setToken(token);
    }

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
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}