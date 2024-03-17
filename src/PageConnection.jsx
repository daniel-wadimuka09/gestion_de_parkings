import React, { useState } from 'react';

export default function PageConnection(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Logic for handling login
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
  };

  return (
    <div className="text-center ">
      <div className="bg-blue-500 p-6">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-4 text-blue-500 py-8">
        <h1>Page de Connexion</h1>
        <div className='mb-10 py-4 '>
          <input
            type="email"
            placeholder="Adresse Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-blue-500 text-blue-500 px-4 py-4 rounded"
          />
        </div>
        <div className='mb-10 px-5'>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className="bg-blue-500 text-blue-500 px-4 py-4 rounded"
          />
        </div>
        <div className=' py-6'>
          <a href="#" onClick={handleForgotPassword} className="text-blue-500">
            Mot de passe oublié
          </a>
        </div>
        <div className='mb-10 px-'>
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Se connecter
          </button>
        </div>
        
        <div className="my-4 flex justify-center ">
          <a href="lien_vers_google" className="mr-5">
            <img src="/home/user-31-c1/gestion_de_parking/src/logo/facebook (2).png" alt="Google" width="50" height="50" />
          </a>
          <a href="lien_vers_facebook">
            <img src="/home/user-31-c1/gestion_de_parking/src/photos/images (1).png" alt="Facebook" width="50" height="50" />
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center mt-5'>
          <a href="lien_vers_inscription" className="text-blue-500">
            S inscrire 
          </a>
        </div>
      <div className="bg-blue-500 p-6">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
