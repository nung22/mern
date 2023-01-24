import React, { useState } from "react";
import io from 'socket.io-client';
import UserForm from "../components/UserForm";
import Chat from "../components/Chat";

export default function Main() {
  const [username, setUsername] = useState("");
  const [socket] = useState(() => io(':8000'));

  const createUser = user => {
    setUsername(user);
    socket.emit("new_message_from_server", user);
    return () => socket.disconnect(true);
  };
  return (
    <div>
      {username === "" && 
        <UserForm onSubmitProp={createUser}/>
      }
      {username !== "" &&
        <Chat userName={username}/>
      }
    </div>
  );
}
