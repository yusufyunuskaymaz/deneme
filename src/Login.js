import React, { useState } from 'react'
import io from "socket.io-client";
import Chat from './Chat';
const socket = io.connect("http://localhost:3001");


const Login = () => {
  const agent = {username:"agent", password:"agent123"}
  const customer = {username:"customer", password:"customer123"}

  const room = "agent"


    const [user, setUser] = useState("");
    const [showChat, setShowChat] = useState(false);

  
    const handleSubmit = () => {
      if (user.name === agent.username && user.password === agent.password) {
        setShowChat(true);
      } else if (user.name === customer.username && user.password === customer.password) {
        setShowChat(true);
      } else {
        alert("Invalid username or password");
      }
      socket.emit("join_room",room)
    };

  return (
    <div className="App">
    {!showChat ? (
      <div className="joinChatContainer">
        <h3>Support App Login</h3>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUser({...user, name: e.target.value});
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setUser({...user, password:e.target.value});
          }}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    ) : (
      <Chat socket={socket} user={user} room={room}  />
    )}
  </div>
  )
}

export default Login