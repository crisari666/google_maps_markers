import React from 'react';
import './App.css';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './components/MapComponent';

function App() {

  const render = (status: Status) => (<h1>{status}</h1>)

  return (
    <div className="App">
      <Wrapper apiKey={"AIzaSyB42KE_SyTx0mvEWe1Z4EU9ramLWn4JBF4"} render={render}>
        <MapComponent />
      </Wrapper>
    </div>
  );
}

export default App;
