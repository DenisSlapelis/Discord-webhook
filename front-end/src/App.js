import React from 'react';
import Header from './component/Header/header';
import Footer from './component/Footer/footer';
import Routes from './routes';

import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes></Routes>
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
