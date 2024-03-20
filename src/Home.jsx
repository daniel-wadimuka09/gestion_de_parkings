import React from 'react';

export default function PageConnection() {

  const handleParkingKasumbalesa = () => {
    // Logic for handling Parking Kasumbalesa button click
  };

  const handleParkingLubumbashi = () => {
    // Logic for handling Parking Lubumbashi button click
  };

  const handleDiscoverServices = () => {
    // Logic for handling Discover Services button click
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 p-9">
        <h1 className="text-white">Parking</h1>
      </div>
      <div className="bg-white p-4 text-blue-500 py-8">
        <img src="/path/to/your/image.jpg" alt="Parking" width="200" height="200" />
        <h1>Bienvenue dans nos parkings</h1>
        <p>Réservez votre place ou souscrivez un abonnement dans le parking qui vous convient.</p>
        <div className="my-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={handleParkingKasumbalesa}>Parking Kasumbalesa</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={handleParkingLubumbashi}>Parking Lubumbashi</button>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={handleDiscoverServices}>Découvrir nos services</button>
        
      </div>
      <div className="bg-blue-500 p-6">
        <h1 className="text-white"></h1>
      </div>
      <div className="bg-blue-500 p-6">
        <div className="flex justify-center">
          <a href="lien_vers_twitter" className="mr-5">
            <img src="/path/to/your/twitter-logo.png" alt="Twitter" width="50" height="50" />
          </a>
          <a href="lien_vers_whatsapp" className="mr-5">
            <img src="/path/to/your/whatsapp-logo.png" alt="WhatsApp" width="50" height="50" />
          </a>
          <a href="lien_vers_instagram" className="mr-5">
            <img src="/path/to/your/instagram-logo.png" alt="Instagram" width="50" height="50" />
          </a>
          <a href="lien_vers_facebook">
            <img src="/path/to/your/facebook-logo.png" alt="Facebook" width="50" height="50" />
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <a href="lien_vers_contacts" className="mr-5 text-white">Nos contacts</a>
          <a href="lien_vers_conditions_generales" className="mr-5 text-white">Conditions générales</a>
          <a href="lien_vers_politique_confidentialite" className="text-white">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  );
}
