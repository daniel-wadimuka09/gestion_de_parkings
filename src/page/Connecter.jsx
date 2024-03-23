import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function PageConnection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleLogin = () => {
    // Validation de l'e-mail
    if (!email.includes('@gmail.com')) {
      setError("Veuillez fournir une adresse e-mail Gmail valide.");
      return;
    }

    // Validation du mot de passe
    if (password.length < 6 || password.length > 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Le mot de passe doit contenir entre 6 et 10 caractères et inclure au moins un caractère spécial.");
      return;
    }

    // Logique de connexion
    // ...
  };

  const handleForgotPassword = () => {
    // Logique pour la récupération du mot de passe oublié
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 p-6">
        
      </div>
      <div className="bg-white p-4 text-blue-500 py-8">
        <h1>Connexion</h1>
        <div className='mb-10 py-4'>
          <input
            type="email"
            placeholder="Adresse Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-blue-500 text-white px-4 py-4 rounded" // Changement de couleur du texte en blanc
          />
        </div>
        <div className='mb-10 px-5'>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className="bg-blue-500 text-white px-4 py-4 rounded" // Changement de couleur du texte en blanc
          />
        </div>
        <div className='py-11'>
          <a href="#" onClick={handleForgotPassword} className="text-blue-500">
            Mot de passe oublié
          </a>
        </div>
        <div className='mb-10 px-'>
          <Link to="/Se connecter" onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Se connecter
          </Link>
        </div>
        
        <div className="my-4 flex justify-center">
          <a href="lien_vers_facebook" className="mr-5">
            <img src="src/logo/facebook (2).png" alt="Facebook" width="25" height="25" className="facebook-logo" />
          </a>
          <a href="lien_vers_google">
            <img src="src/logo/google.png" alt="Google" width="25" height="25" className="google-logo" />
          </a>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className='flex justify-center items-center mt-11'>
         <Link to='/Inscription'>Inscription</Link>
      </div>
      <div className="bg-blue-500 p-7">
        <h1 className="text-white"></h1>
      </div>
    </div>
  );
}
