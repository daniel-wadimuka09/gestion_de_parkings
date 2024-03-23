import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import './index.css';
import PageHome from './PageHome.jsx';
import Connecter from './page/Connecter.jsx';
import Header from './Header.jsx';
 import ErrorPage from './error-page.jsx'; // Correctif: Changement de 'error-page' à 'ErrorPage'
import Inscrption  from './page/Inscription';
import Reservation from './Reservation.jsx';
import Home from './Home.jsx';
import { createBrowserRouter,
   RouterProvider, 
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: < PageHome /> ,// Correctif: Changement de 'root' à 'Root'
  },
  
  {
    path: "Entre",
    element: <Connecter /> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Inscription",
    element: <Inscrption /> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  // {
  //   path: "/",
  //   element: <Reservation/> ,// Correctif: Changement de 'root' à 'Root'
  //   errorElement: <ErrorPage />,

  // },
  // {
  //   path: "/",
  //   element: <Home/> ,// Correctif: Changement de 'root' à 'Root'
  //   errorElement: <ErrorPage />,

  // },
  
  
  
  // Ajoutez d'autres routes au besoin
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {router} />
    
 
);

