import { RoutesPage } from '../router';
import './App.css';
import AllPages from './pages/AllPages';

export function App() {
    const isLogin = new URLSearchParams(window.location.search)
    if (isLogin.get('status') === 'home') {
      return (<AllPages />)
    }
    
  return (
    <div>
      <RoutesPage />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
