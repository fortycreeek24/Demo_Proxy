import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Carousel from './components/carousel'
import Product from './components/Product'



function App() {
  return (
    <BrowserRouter>
      <div >
        <Route exact path='/' component={Carousel}/>
        <Route path='/product' component={Product}/>
      </div>
    </BrowserRouter>
  );
}

export default App;