import React from 'react';

export default function PageConnection(){

  const handleReservation = () => {
    // Logic for handling reservation
  };

  const handleSubscription = () => {
    // Logic for handling subscription
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 p-5">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-4 text-blue-500 py-4 flex flex-col items-center">
        
        <div className='mb-4 py-60'>
          <button onClick={handleReservation} className="bg-blue-500 text-white px-8 py-4 rounded font-bold mb-5">
            Réserver une place
          </button>
          <button onClick={handleSubscription} className="bg-orange-500 text-white px-8 py-4 rounded font-bold">
            Souscrire un abonnement
          </button>
        </div>
      </div>
      <div className="bg-blue-500 p-6">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
