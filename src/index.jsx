import { navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from '../src/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

const rootDOM = document.getElementById('root');
const root = ReactDOM.createRoot(rootDOM);
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();