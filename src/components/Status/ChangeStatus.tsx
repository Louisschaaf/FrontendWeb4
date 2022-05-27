import React, { useState } from 'react';
import { User } from '../../types';
import UserService from '../../services/UserService';
import "./status.css";
import axios from 'axios';

const Status: React.FC = () => {
  const token = sessionStorage.getItem('token');
  const JSONtoken = JSON.parse((token) ? token : '{}');
  const UserID = (JSONtoken) ? JSONtoken["user"]["user_id"] : null;
  const [status, setStatus] = useState<string>('');
  const changeStatusUser = async ( status: string) => {
    try {
      const res = await UserService.changeStatus(status, UserID);
      window.location.reload();
      return {status: 'success'};
    } catch (error: any) {
        return error;
      }
  }

    const handleStatusSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (status == "offline" || status== "busy" || status == "online" || status == "inactive"){
        let statusCheck = await changeStatusUser(status);
        if (statusCheck["status"] === "error") {
            alert("Wrong Status Selected");
            statusCheck = "error";
        }}
        else{
          alert("Wrong status inserted for the user.")
        }
    };

  return(
    <div className="login-wrapper">
    <h2>Change User Status</h2>
    <form id="publishMessageForm" onSubmit={handleStatusSubmit}>
      <div className="user-box">
      <label className='labelMessageForm'>Status</label>
        <input type="text" onChange={e => setStatus(e.target.value.trim().toLocaleLowerCase())} />
        <button type="submit">Submit</button>
      </div>

    </form> 
    </div>  
  )
};

export default Status;