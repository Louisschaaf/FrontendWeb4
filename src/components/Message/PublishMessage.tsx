import React, { useState } from 'react';
import {Message } from '../../types';
import { AxiosResponse } from 'axios';
import MessageService from '../../services/MessageService';

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

const handleStatusSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  if (type && UserID && (text && text.toString.length < 256)) {
    publishMessage(UserID, text, type)
  }
};
  return(
    <div className="DifferentService">
      <h1>Publish Message</h1>
      <form id="formPublishMessage" onSubmit={handleStatusSubmit}>
        <label>
            <p>Publish Message</p>
            <select onChange={e => setType(e.target.value)}>
              <option defaultValue={"Public"}>Public</option>
              <option value="Private">Private</option>
            </select>
            <textarea form="formPublishMessage" maxLength={256} value={text} onChange={(event) => setText(event.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default PublishMessage;