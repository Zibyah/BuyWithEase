import './App.css';
import AllPages from './pages/AllPages';
import { Login } from './pages/Login';
import Signup from './pages/Signup'

export function App() {
    const isLogin = new URLSearchParams(window.location.search)
    if (isLogin.get('status') === 'home') {
      return (<AllPages />)
    }
    
  return (
    <div>
<<<<<<< HEAD
      <Login />
=======
      <Signup />
>>>>>>> 0309ac800b54c56f5792198285d4275fd590fa40
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
