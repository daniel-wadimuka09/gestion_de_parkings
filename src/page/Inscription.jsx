import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function PageConnection(){

  const [nom, setNom] = useState('');
  const [postNom, setPostNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePostNomChange = (e) => {
    setPostNom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = () => {
    // Logic for handling login
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
  };

  const handleRegistration = () => {
    // Logic for handling registration

    // After successful registration, reset all fields to blank
    setNom('');
    setPostNom('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="text-center ">
      <div className="bg-blue-500 p-5">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-4 text-blue-500 py-9">
        <h1>Inscription</h1>
        <div className='mb-4 py-4 '>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={handleNomChange}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded"
          />
        </div>
        <div className='mb-4 py-4 '>
          <input
            type="text"
            placeholder="Post Nom"
            value={postNom}
            onChange={handlePostNomChange}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded"
          />
        </div>
        <div className='mb-4 py-4 '>
          <input
            type="email"
            placeholder="Adresse Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded"
          />
        </div>
        <div className='mb-4 py-4 '>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded"
          />
        </div>
        <div className='mb-4 py-4 '>
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="bg-blue-500 text-blue-500 px-4 py-2 rounded"
          />
        </div>
      
        
        <div className='mb-4 py-4 '>
          <Link to="/Sinscrire" onClick={handleRegistration} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sinscrire
          </Link>
        </div>
        
      </div>
      <div className="bg-blue-500 p-4">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
