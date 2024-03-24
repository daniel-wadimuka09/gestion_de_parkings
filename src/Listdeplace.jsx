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
    <div className="text-center ">
      <div className="bg-blue-500 p-4">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white  text-blue-500 py-60 flex flex-col items-center">
        
        

        {/* Ajout des quatre boutons supplémentaires */}
        <div className="flex justify-center items-center mb-12">
          <Link to="/Kasumbalease" className="bg-orange-500 text-white px-8 py-3 rounded font-bold mr-4">
            Kasumbalease
          </Link>
          <Link to="/Likasi" className="bg-orange-500 text-white px-8 py-3 rounded font-bold">
            Likasi
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/Lubumbashi" className="bg-blue-500 text-white px-8 py-3 rounded font-bold mr-4">
            Lubumbashi
          </Link>
          <Link to="/Kolwezi" className="bg-blue-500 text-white px-8 py-3 rounded font-bold">
            Kolwezi
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 p-3">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
