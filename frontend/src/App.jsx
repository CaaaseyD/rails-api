import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [user, setUser] = useState([])
  // const client_id = import.meta.env.REACT_APP_CLIENT_ID;
  // const client_secret = import.meta.env.REACT_APP_CLIENT_SECRET;
  const client_id = "ii1wZFkFkzfSuNMwDzrNhEshaX2Fo6Dc6QxCVAJEl8U";
  const client_secret = "SlBbmfaLnOfuQ3tesyHoi4BNyRC3HIa9jY5gLCOVqe4";
  useEffect(() => {
      login();
    },[])

  const login = () => {
    const data = {
      "grant_type": "password",
      "email": "admin@caseydai.me",
      "password": "password",
      "client_id": client_id,
      "client_secret": client_secret,
    };
    axios
      .post("http://localhost:3000/v1/users/oauth/token", data)
      .then(response => {
        setUser(response.data.user);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>The API</h1>
      <h2>Current User: {user.email}</h2>
    </div>
  )
}

export default App
