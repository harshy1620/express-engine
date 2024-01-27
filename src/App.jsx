import React from 'react';
import ExpressionForm from './components/ExpressionForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App d-flex flex-column  justify-content-between'>
     
      <ExpressionForm/>
      <Footer />
    </div>
  );
}

export default App;
