import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Middle from './components/MiddleSection';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Middle />
    </div>
  );
}

export default App;
