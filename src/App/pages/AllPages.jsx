import React from 'react';
import '../App.css';
import { Landing } from './Landing';
import { Product } from './Products';
import { Login } from './Login';

export default function AllPages() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };
  const handleLogout = () => {
    setLoggedInUser(null);
  };
  return (
    <div>
       {loggedInUser ? (
        <Landing username={loggedInUser} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
