import React, { useState } from 'react';

export default function PageConnection() {

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handlers for email and password changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handlers for login and forgot password
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
  };

  return (
    <div className="text-center  ">
      <div className="bg-blue-500 p-6">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-4 text-blue-500 py-8">
        <h1>Page de Connexion</h1>
        {/* Input for email */}
        <div className='mb-10 py-8 '>
          <input
            type="email"
            placeholder="Adresse Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-blue-500 text-blue-500 px-4 py-4 rounded"
          />
        </div>
        {/* Input for password */}
        <div className='mb-10 px-5'>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className="bg-blue-500 text-blue-500 px-4 py-4 rounded"
          />
        </div>
        {/* Forgot password link */}
        <div className=' py-11'>
          <a href="#" onClick={handleForgotPassword} className="text-blue-500">
            Mot de passe oublié
          </a>
        </div>
        {/* Login button */}
        <div className='mb-10 px-'>
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Se connecter
          </button>
        </div>
        
        {/* Facebook and Google logos */}
        <div className="my-4 flex justify-center ">
          {/* Facebook logo */}
          <a href="lien_vers_facebook" className="mr-5">
            <img src="src/logo/facebook .png" alt="Facebook" width="50" height="50" className="facebook-logo" />
          </a>
          {/* Google logo */}
          <a href="lien_vers_google">
            <img src="src/logo/google.png" alt="Google" width="50" height="50" className="google-logo" />
          </a>
        </div>
      </div>
      {/* Sign up link */}
      <div className='flex justify-center items-center mt-5'>
        <a href="lien_vers_inscription" className="text-blue-500">
          S'inscrire 
        </a>
      </div>
      <div className="bg-blue-500 p-6">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
