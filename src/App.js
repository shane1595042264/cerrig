import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add your main content here */}
      <main>
        <h1>Welcome to My Website</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
