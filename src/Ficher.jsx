import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function PageConnection(){

  const [exitDateTime, setExitDateTime] = useState(""); // State for exit date and time
  const [daysToStay, setDaysToStay] = useState(""); // State for number of days to stay

  const handleReservation = () => {
    // Logic for handling reservation
  };

  const handleSubscription = () => {
    // Logic for handling subscription
  };

  const handleModify = () => {
    // Logic for modification
  };

  const handleValidation = () => {
    // Logic for validation
  };

  return (
    <div className="text-center ">
      <div className="bg-blue-500 p-6">
        
      </div>
      <div className="bg-white p-7 text-blue-500 py-40 flex flex-col items-center">


        {/* Fields for exit date and time, and number of days to stay */}
        <div className="flex flex-col items-center">
          <input 
            type="datetime-local" 
            value={exitDateTime} 
            onChange={(e) => setExitDateTime(e.target.value)} 
            className="border border-gray-400 rounded px-3 py-2 mb-3" 
          />
          <input 
            type="number" 
            value={daysToStay} 
            onChange={(e) => setDaysToStay(e.target.value)} 
            placeholder="Nombre de jours à passer" 
            className="border border-gray-400 rounded px-1 py- mb-40" 
          />
          <button onClick={handleModify} className="bg-green-500 text-white px-7 py-2 rounded font-bold">
            Modifier
          </button>
          <Link to="/" onClick={handleValidation} className="bg-orange-500 text-white px-8 py-2 rounded font-bold mt-3">
            Valider
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 p-3">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
