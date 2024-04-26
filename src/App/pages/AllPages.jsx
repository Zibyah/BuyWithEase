import React from 'react';
import '../App.css';
import { Landing } from './Landing';
import { Product } from './Products';

export default function AllPages() {
  return (
    <div>
      <Landing />
      <Product />
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
