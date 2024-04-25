import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { IsProtectedRoute } from './hoc/isProtectedRoute';
import { Login } from './pages/Login';
import {Signup} from './pages/Signup';
import { Landing } from './pages/Landing';
import { useNavigation } from './pages/hooks/useNavigation';
import { Product } from './pages/Products';

const router = createBrowserRouter ([
  {
    path: '',
    element: (<IsProtectedRoute>
      <Landing />
    </IsProtectedRoute>),
  },
  {
    path:routes.landing(),
    element:<IsProtectedRoute><Landing /></IsProtectedRoute>,
    children: [
      {
        path: '',
        element: <Product />
      },
    ]
  },
  
  {
    path: 'login',
    element: <Login />,
    children: [
      {
        path: '',
        element: <Signup />
      },
    ]
  },
  {
    path: '*',
    element: <h1 style={{ color: 'black', fontSize: 200}}>404</h1>
  }
 ])

export function App() {
  const isLogin = new URLSearchParams(window.location.search)
  if (isLogin.get('status') === 'home') {
    return (<Landing />)
  }
    return (<>
    <RouterProvider router={router} />
    </>)
    // return (
    //   <div>
    //     <Login />
    //   </div>
    // );
    }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
