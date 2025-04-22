import React from 'react';
// Replace react-pdf import with @react-pdf-viewer
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf'; // If needed, only use this for handling pdfjs

const PDFViewer = () => {
  const pdfUrl = '/path/to/your/pdf-file.pdf'; // Replace with your PDF file path

  return (
    <div className="flex justify-center items-center mt-4">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <div style={{ width: '80%', height: '600px' }}>
          <Viewer fileUrl={pdfUrl} />
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
