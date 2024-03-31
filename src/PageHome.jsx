import React from 'react';
import { Link } from "react-router-dom";

export default function PageHome() {
  return (
    
    <div className="relative -screen ">
      <div className="absolute inset-0 bg-image "></div>
      <div className="flex justify-center items-center relative  mb-5"> 
      {/* Ajoutez une marge inférieure */}
        <div className="text-center">
          <h1 className="text-xl text-blue  py-60">Take Advantage of Your Parking</h1>
          <div className="flex justify-center py-8">
            {/* <a href='/Entre' className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-5 py-3 rounded ">Entre</a> */}
            <Link to="/Entre" className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-5 py-3 rounded " >Entre</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
