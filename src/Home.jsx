import React from 'react';
import { Link } from "react-router-dom";
import './App.css'


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

  const handleReservePlace = () => {
    // Logic for handling reserve place button click
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 p-5">
        {/* <h1 className="text-white">Parking</h1> */}
      </div>
      
      <div className="bg-white  text-blue-500 py-8">
      
        <img src="src/photos/parking.jpeg" alt="Parking" width="500" height="300" className="mx-auto" />
        <div>
          <Link to="/Réservez votre place" className="bg-orange-500 text-white px-4 py-3 rounded  " onClick={handleReservePlace}>Réservez votre place</Link>
        </div>
        
        <p className="mb-5">Réservez votre place ou souscrivez un abonnement dans le parking qui vous convient.</p>
        <div className="my-4">
          <div className="flex items-center justify-center mb-4">
            <div>
              <img src="src/photos/kasumbalesa.jpeg" alt="Parking Kasumbalesa" width="500" height="50" className="mr-2" />
              <Link to="/Parking Kasumbalesa" className="bg-orange-500 text-white px-4 py-4 rounded" onClick={handleParkingKasumbalesa}>Parking Kasumbalesa</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <img src="src/photos/lubumbashi.jpeg" alt="Parking Lubumbashi" width="500" height="50" className="mr-2" />
              <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={handleParkingLubumbashi}>Parking Lubumbashi</button>
            </div>
          </div>
        </div>
        
        <div className="my-4">
          <Link to="Réservez votre place" className="bg-orange-500 text-white px-4 py-2 rounded" onClick={handleDiscoverServices}>Découvrir nos services</Link>
        </div>
      </div>
      <div className="bg-blue-500 p-6">
        <h1 className="text-white">Parking, filiale du groupe parking, s inscrit au cœur des enjeux de la mobilité. Proche de nos clients, nous facilitons leurs déplacements.</h1>
      </div>
      <div className=" p-7">
        <div className="flex justify-center">
          <a href="lien_vers_twitter" className="mr-5">
            <img src="src/logo/twitter .png" alt="Twitter" width="30" height="50" className='twitter-logo' />
          </a>
          <a href="lien_vers_whatsapp" className="mr-5">
            <img src="src/logo/whatsapp.png" alt="WhatsApp" width="30" height="50" className='whatsapp-logo'/>
          </a>
          <a href="lien_vers_instagram" className="mr-5">
            <img src="src/logo/instagram .png" alt="Instagram" width="30" height="50" className='instagram-logo'/>
          </a>
          <a href="lien_vers_facebook">
            <img src="src/logo/facebook (2).png" alt="Facebook" width="30" height="50" className='facebook-logo'/>
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <Link href="lien_vers_contacts" className="mr-5 text-">Nos contacts</Link>
          <a href="lien_vers_conditions_generales" className="mr-5 text-">Conditions générales</a>
          <a href="lien_vers_politique_confidentialite" className="text-">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  );
}
