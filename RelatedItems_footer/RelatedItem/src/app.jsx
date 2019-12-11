import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Carousel from './components/carousel'



function App() {
  return (
    <BrowserRouter>
      <div >
        <Route exact path='/' component={Carousel}/>
      </div>
    </BrowserRouter>
  );
}

export default App;