import React, { useState } from 'react';
import { User } from '../../types';
import "./status.css";
import axios from 'axios';

const Status: React.FC = () => {
    const [status, setStatus] = useState<string>('');
    const changeStatusUser = async ( status: string) => {
       try {
           const res = await axios.put('http://localhost:3000/user/status', {status: status});
           window.location.reload();
           return {status: 'success'};
       } catch (error: any) {
           return error;
       }
    }

    const handleStatusSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let statusCheck = await changeStatusUser(status);
        if (statusCheck["status"] === "error") {
            alert("Wrong Status Selected");
            statusCheck = "error";
        }
    };

  return(
    <div className="login-wrapper">
      <h1>Change your status here</h1>
      <form onSubmit={handleStatusSubmit}>
        <label>
            <p>Status</p>
            <select onChange={e => setStatus(e.target.value)}>
              <option value="offline">Offline</option>
              <option value="online">Online</option>
              <option value="inactive">Inactive</option>
              <option value="busy">Busy</option>
            </select>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Status;