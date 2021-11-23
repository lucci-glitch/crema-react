import React from 'react';
import Message from './Message';

let items=[
  "Jelly chocolate cake gummi bears apple pie jelly beans candy. Tootsie roll lollipop wafer topping toffee. Icing bonbon chocolate bar jelly beans soufflé topping croissant carrot cake.",
  "Jelly chocolate cake gummi bears apple pie jelly beans candy. Tootsie roll lollipop wafer topping toffee.",
  "Jelly chocolate cake gummi bears apple pie jelly beans candy.",
  "Croissant cheesecake chocolate bar chocolate bonbon gingerbread.",
  "Soufflé jelly beans toffee donut halvah fruitcake dessert cupcake.",
  "Hodor. Hodor hodor, hodor..."
];
  
const ChatWindow = () => {
  
  return (
    <div className='Chat-window'>
        <h1>Chat window</h1>
        {items.map((item,index)=>{
         return <Message key={index} text={item}></Message>
     })}
    </div>
  );
};
  
export default ChatWindow;