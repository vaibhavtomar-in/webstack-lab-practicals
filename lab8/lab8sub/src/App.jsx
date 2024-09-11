import React from 'react';
import Card from './Card';
import './index.css';

// Importing images from the assets folder
import Tiffin1 from './assets/tiffin1.jpg';
import Tiffin2 from './assets/tiffin2.jpg';
import Tiffin3 from './assets/tiffin3.jpg';

const App = () => {
  const tiffins = [
    { title: 'Deluxe Veg Tiffin', features: 'Includes dal, sabzi, rice, and roti.', image: Tiffin1 },
    { title: 'Non-Veg Special Tiffin', features: 'Includes chicken curry, rice, and salad.', image: Tiffin2 },
    { title: 'Healthy Meal Tiffin', features: 'Low-calorie tiffin with salad and multigrain roti.', image: Tiffin3 },
  ];

  return (
    <div className="container mx-auto p-4">

      <h1 className="text-3xl font-bold mb-4 text-center bg-orange-200 rounded-lg py-2">Tiffin Delivery Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {tiffins.map((tiffin, index) => (
          <Card key={index} tiffin={tiffin} />
        ))}
      </div>
    </div>
  );
};

export default App;
