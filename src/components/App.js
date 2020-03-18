import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';


const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main className="container-fluid">
      <MainSection />
    </main>
  </div>
);

export default App;
