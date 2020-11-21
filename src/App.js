import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Dinner dishName="Daal" sweetDish="that is Kheer"/>

    <hr/>

    <Dinner dishName="Chicken Biryani" sweetDish="that is Gajar ka Halwa"/>

    <hr/>

    <Dinner dishName="Nihari" sweetDish="that is Jaleebi"/>

    <hr/>

    <Dinner dishName="Chicken Tikka" sweetDish="that is RasMalai"/>
    </header>
   </div>
   );
}

export default App;
