import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../utils/constants";

interface ChatItem {
  _id: string;
  chatName: string;
}

const Chat: React.FC = () => {
  const [chats, setChats] = useState<ChatItem[]>([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get<ChatItem[]>(`${API_URL}chat`);
      console.log(data);
      setChats(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
      {/* {chats} */}
    </div>
  );
};

export default Chat;
