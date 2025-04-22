// src/components/PDFViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const App = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>My PDF Viewer</h1>
      </header>
      <main>
        <div style={styles.viewerContainer}>
          <h2>PDF viewer is working!</h2>
        </div>
      </main>
    </div>
  );
};


export default PDFViewer;
