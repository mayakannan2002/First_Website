import React from "react";

import Slidder from './../image-sliders/Slider';
import CardSection from './../cards/cardsection';
import Services from './../Services/ServicesSection';


function App() {
  return (
    <div className="App">
     
      <Slidder />
      <CardSection /> {/* Use the CardSection component */}
      <Services/>
      
  
    </div>
  );
}

export default App;
