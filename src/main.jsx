import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageHome from './PageHome.jsx';
import Connecter from './page/Connecter.jsx';
import ErrorPage from './error-page.jsx'; // Correctif: Changement de 'error-page' à 'ErrorPage'
import Inscrption  from './page/Inscription';
import Reservation from './Reservation.jsx';
import Home from './Home.jsx';
import Codepin from './Codepin.jsx';
import Listdeplace from './Listdeplace.jsx';
import InfoKas  from './InfoKas.jsx';
import Ficher from './Ficher.jsx'
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
  
  {
    path: "Sinscrire",
    element: <Codepin/> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Se connecter",
    element: <Home/> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Likasi",
    element: <Reservation/> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Kasumbalease",
    element: <Reservation/> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Kolwezi",
    element: <Reservation/> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Lubumbashi",
    element: <Reservation/> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Réservez votre place",
    element: <Listdeplace /> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Parking Kasumbalesa",
    element: <InfoKas /> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Réserver une autre place",
    element: <Reservation /> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  {
    path: "Réserver une place",
    element: <Ficher /> ,// Correctif: Changement de 'root' à 'Root'
    errorElement: <ErrorPage />,

  },
  
  
  
  
  
  // Ajoutez d'autres routes au besoin  Réservez votre place
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {router} />
    
 
);

