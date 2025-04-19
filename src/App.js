// src/App.js
import React from 'react';
import PDFViewer from './components/PDFViewer';

function App() {
  return (
    <div className="App">
      <h1>PDF Reader App</h1>
      <PDFViewer url="/resume.pdf" />
    </div>
  );
}

export default App;
