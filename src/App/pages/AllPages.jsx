import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../App.css';
import { Landing } from './Landing';
import { NoPage } from "./Errorpage";
import { Product } from "./Products";

export default function AllPages() { 
    return(<BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />}>
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
