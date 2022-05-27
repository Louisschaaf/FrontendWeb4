import React, { useState } from 'react';
import {Message } from '../../types';
import { AxiosResponse } from 'axios';
import MessageService from '../../services/MessageService';
import "./message.css";

const PublishMessage: React.FC = () => {
  const token = sessionStorage.getItem('token');
  const JSONtoken = JSON.parse((token) ? token : '{}');
  const UserID = (JSONtoken) ? JSONtoken["user"]["user_id"] : null;
  const [text, setText] = useState<string>();
  const [type, setType] = useState<string>();

  const publishMessage = async (User_ID: number, text_message: string, type_message: string) => {
    const res: AxiosResponse<Message> = await MessageService.publishMessage(User_ID, text_message, type_message);
};

const handleStatusSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  if (type && type.match("Public" || "Private")){
    if (text && text.toString.length < 256){
      if (UserID){
        publishMessage(UserID, text, type)
      }else{
        alert("Something Wrong with the user")
      }
    }else{
      alert("Wrong Text Inserted")
    }
  }else{
    alert("Wrong Type Inserted");
  }
};
  return(
  <div className="login-wrapper">
  <h2>Publish Message</h2>
  <form id="publishMessageForm">
    <div className="user-box">
    <label className='labelMessageForm'>Type</label>
      <input type="text" name="Type:" />
    </div>
    <div className="user-box">
    <label className='labelMessageForm'>Text</label>
      <textarea form="publishMessageForm" name="Text:"/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
  </form>
</div>
  )
};

export default PublishMessage;