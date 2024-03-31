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
      <div className="bg-blue-500 p-5">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p- text-blue-500 py-5 flex flex-col items-center">
        
        <div className='mb-3 py-60'>
          <Link to="/Réserver une place" onClick={handleReservation} className="bg-blue-500 text-white px-8 py-5 rounded font-bold mb-2">
            Réserver une place
          </Link>
          <Link onClick={handleSubscription} className="bg-orange-500 text-white px-8 py-3 rounded font-bold">
             abonnement
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 p-4">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
