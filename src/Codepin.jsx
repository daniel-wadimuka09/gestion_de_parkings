import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function PageConnection(){

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const handlePin1Change = (e) => {
    setPin1(e.target.value);
  };

  const handlePin2Change = (e) => {
    setPin2(e.target.value);
  };

  const handlePin3Change = (e) => {
    setPin3(e.target.value);
  };

  const handlePin4Change = (e) => {
    setPin4(e.target.value);
  };

  const handleRegistration = () => {
    // Logic for handling registration
    // After successful registration, reset all fields to blank
    setPin1('');
    setPin2('');
    setPin3('');
    setPin4('');
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 p-6">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-7 text-blue-500 ">
        <h1>Taperle code a 4 chiffres :</h1>
        <div className='mb- py-48'>
          <input
            type="text"
            maxLength="1"
            placeholder="PIN"
            value={pin1}
            onChange={handlePin1Change}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded w-10 inline-block mr-2"
          />
          <input
            type="text"
            maxLength="1"
            placeholder="PIN"
            value={pin2}
            onChange={handlePin2Change}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded w-10 inline-block mr-2"
          />
          <input
            type="text"
            maxLength="1"
            placeholder="PIN"
            value={pin3}
            onChange={handlePin3Change}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded w-10 inline-block mr-2"
          />
          <input
            type="text"
            maxLength="1"
            placeholder="PIN"
            value={pin4}
            onChange={handlePin4Change}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded w-10 inline-block"
          />
        </div>
        <div className='mb-4 py-11'>
          <Link to='Confimer le code/' onClick={handleRegistration} className="bg-orange-500 text-white px-4 py-2 rounded">
            Confimer le code
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 p-6">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
