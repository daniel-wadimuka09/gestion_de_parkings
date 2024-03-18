export React from 'react';

const ParkingScreen = () => {
  return (
    <div className='bg-gray-200'>
      {/* Header */}
      <div className='bg-blue-800 text-white p-4'>
        <h1 className='text-lg'>Parking</h1>
      </div>

      {/* Content */}
      <div className='relative'>
        <img
          src='path_to_background_image.jpg'
          alt='Parking'
          className='w-full h-56 object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
          <h2 className='text-white text-2xl font-bold mb-4'>Bienvenue dans nos parkings</h2>
          <button 
            className='bg-red-500 text-white px-6 py-2 rounded shadow-lg focus:outline-none'
            onClick={() => {/* Handle reservation click here */}}>
            RESERVEZ UNE PLACE
          </button>
          <p className='text-white mt-4'>
            Réservez votre place<br />
            ou souscrivez un abonnement dans<br />
            le parking qui vous convient
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className='p-4'>
        <h3 className='text-lg font-bold'>Parking Kasumbalesa</h3>
      </div>
    </div>
  );
};

