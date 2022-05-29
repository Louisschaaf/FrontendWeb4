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
    console.log(UserID);
    const res: AxiosResponse<Message> = await MessageService.publishMessage(User_ID, text_message, type_message);
};

const handleMessageSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  if (type && type === "public" || type === "private"){
    if (text && text.toString.length < 256){
      if (UserID){
        publishMessage(UserID, text, type)
      }else{
        alert("Something Wrong with the user")
      }
    }else{
      alert(text + " : Wrong Text Inserted: Max 255 characters")
    }
  }else{
    alert( type +" : Wrong Type Inserted: Need to be 'Public or 'Private'.");
  }
};
  return(
  <div className="DifferentService">
    <div className="friends">
    <h2>Publish Message</h2>
  <form id="publishMessageForm" onSubmit={handleMessageSubmit}>
    <div className="user-box" id='type'>
    <label className='labelMessageForm'></label>
      <input type="text" placeholder={"Type"} onChange={e => setType(e.target.value.trim().toLocaleLowerCase())} />
    </div>
    <div className="user-box">
    <label className='labelMessageForm'></label>
      <textarea form="publishMessageForm" maxLength={256} placeholder={"Message"} onChange={e => setText(e.target.value.toLocaleLowerCase())}/>
    </div>
    <div>
        <button type="submit" className='submit'>Publish</button>
    </div>
  </form>
    </div>
</div>
  )
};

export default PublishMessage;