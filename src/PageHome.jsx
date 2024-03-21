import React from 'react';

export default function PageHome() {
  return (
    <div className="relative -screen py-11">
      <div className="absolute inset-0 bg-image "></div>
      <div className="flex justify-center items-center relative  mb-5"> 
      {/* Ajoutez une marge inférieure */}
        <div className="text-center">
          <h1 className="text-xl text-blue mb-4 ">Take Advantage of Your Parking</h1>
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-5 py-3 rounded">Go To Application</button>
          </div>
        </div>
      </div>
    </div>
  );
}
