import React from 'react'
import cam from "../img/cam.png"
import add from "../img/add.png"
import more from "../img/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

function chat() {
  const { data } = useContext(ChatContext);
  
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default chat
