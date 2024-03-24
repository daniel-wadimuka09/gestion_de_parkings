import React from 'react';
import { Link } from "react-router-dom";

export default function PageConnection(){

  const handleReservation = () => {
    // Logic for handling reservation
  };

  const handleSubscription = () => {
    // Logic for handling subscription
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 p-6">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-7 text-blue-500 py-3 flex flex-col items-center">
        <div className="mb-9">
          <p>Informations sur le parking, la réservation et la sécurité.. 
          </p>
          {/* Ajoutez ici des informations sur le parking */}
        </div>
        
        <div className="mb-9">
          {/* Ajoutez ici des images défilantes */}
          <img src="src/photos/kasumbalesa.jpeg" alt="Image1" />
          <img src="src/photos/lubumbashi.jpeg" alt="Image2" />
          {/* Assurez-vous d'ajuster les chemins et les attributs alt en conséquence */}
        </div>
        <div>
          {/* Ajoutez ici un autre bouton de réservation */}
          <Link to="/Réserver une autre place" onClick={handleReservation} className="bg-blue-500 text-white px-8 py-4 rounded font-bold mb-2">
            Réserver une autre place
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 p-5">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
