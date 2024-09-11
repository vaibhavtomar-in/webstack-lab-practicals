import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = ({ tiffin }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  const resetLikes = () => {
    setLikes(0);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-orange-200">
      <img className="w-full h-48 object-cover" src={tiffin.image} alt={tiffin.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{tiffin.title}</div>
        <p className="text-gray-700 text-base">{tiffin.features}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center space-x-2">
        <button onClick={handleLike} className="relative">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-red-500 transition-transform"
            style={{
              transform: `scale(${1 + likes * 0.2})`,
              transition: 'transform 0.3s ease',
              transformOrigin: 'left bottom', // Keep the heart aligned to the left
              maxWidth: '100%', // Prevent it from exceeding the card width

            }}
          />
        </button>
        
      </div>
      <div className='px-6 flex flex-row'>
        <span className="text-gray-700 flex items-center">{likes} Likes</span>
        <div className='px-2 flex items-center justify-center h-full align-middle'>
          <button 
            type="button" 
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
            onClick={resetLikes}
          >
            Reset!
          </button>
        </div>
      </div>
     </div>
  );
};

export default Card;
