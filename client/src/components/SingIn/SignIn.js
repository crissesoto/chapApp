import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './SignIn.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="signInOuterContainer">
      <div className="signInInnerContainer">
        <h1 className="heading">Realtime Chat Application</h1>
        <div>
          <input placeholder="Name" className="signInInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="signInInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatRoom?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}