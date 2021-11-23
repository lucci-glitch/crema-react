import React from 'react';
import ChatWindow from '../components/ChatWindow';
import ActionBar from '../components/ActionBar';
  
const Chat = () => {
  return (
    <div className='Chat-container'>
        <ChatWindow></ChatWindow>
        <ActionBar></ActionBar>
    </div>
  );
};
  
export default Chat;