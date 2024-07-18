import React from 'react';
import Countries from './component/countries';
import DocumentVerification from './component/DocumentVerification';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Countries />
      <DocumentVerification />
      <Dashboard />
    </div>
  );
}

export default App;