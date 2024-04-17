import './App.css';
import AllPages from './pages/AllPages';
import { Login } from './pages/Login';

export function App() {
    const isLogin = new URLSearchParams(window.location.search)
    if (isLogin.get('status') === 'home') {
      return (<AllPages />)
    }
    
  return (
    <div>
      <Login />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
