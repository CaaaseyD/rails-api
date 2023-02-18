import { useState } from 'react';
import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState([])
  const client_id = "ii1wZFkFkzfSuNMwDzrNhEshaX2Fo6Dc6QxCVAJEl8U";
  const client_secret = "SlBbmfaLnOfuQ3tesyHoi4BNyRC3HIa9jY5gLCOVqe4";

  useEffect(()=>{
      login();
    },[])

  const login = () => {
    const data = {
      "grant_type": "password",
      "email": "admin@caseydai.me",
      "password": "password",
      "client_id": client_id,
      "client_secret": client_secret
    }
    axios
    .post("http://localhost:3000/v1/users/oauth/token", data)
    .then(response => {
      setUser(response.data.user)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <div>
        <h1>The API</h1>
        <h2>Current User: {user}</h2>
      </div>
    </div>
  )
}

export default App
