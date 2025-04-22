import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const promptFont = {
  fontFamily: "'Prompt', sans-serif",
};

function App() {
  const [pdfFile, setPdfFile] = useState('/resume.pdf');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('icon');

  const files = [
    { name: 'Resume', path: '/resume.pdf', icon: '/fileicon1.png' },
    { name: '06.pdf', path: '/06.pdf', icon: '/fileicon2.png' },
    { name: 'Poster', path: '/poster.pdf', icon: '/fileicon3.png' },
  ];

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Zoom Plugin setup
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', ...promptFont }}>
      {/* Header */}
      <header style={{
        ...promptFont,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#dfefff',
        borderBottom: '1px solid #ddd'
      }}>
        <img src="/logoapple.png" alt="Apple Logo" style={{ height: '64px' }} />
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>PDF Viewer</div>
        <input
          type="text"
          placeholder="🔍 Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '0.4rem 0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        />
      </header>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Sidebar */}
        <div style={{
          ...promptFont,
          width: '200px',
          backgroundColor: '#ffe6e6',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          overflowY: 'auto'
        }}>
          <h3 style={{ marginBottom: '10px' }}>Files</h3>

          {/* View toggle buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/files.png"
              alt="Icon View"
              style={{
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                opacity: viewMode === 'icon' ? 1 : 0.5
              }}
              onClick={() => setViewMode('icon')}
              title="Icon View"
            />
            <img
              src="/listicon.png"
              alt="List View"
              style={{
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                opacity: viewMode === 'list' ? 1 : 0.5
              }}
              onClick={() => setViewMode('list')}
              title="List View"
            />
          </div>

          {/* File list */}
          {viewMode === 'icon' ? (
            filteredFiles.map((file) => (
              <div
                key={file.path}
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => setPdfFile(file.path)}
              >
                <img
                  src={file.icon}
                  alt={file.name}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div>{file.name}</div>
              </div>
            ))
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
              {filteredFiles.map((file) => (
                <li
                  key={file.path}
                  onClick={() => setPdfFile(file.path)}
                  style={{
                    padding: '10px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #ddd',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <img
                    src="/listicon.png"
                    alt="file icon"
                    style={{ width: '24px', height: '24px' }}
                  />
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f4f4f8' }}>
          {/* Manual Zoom controls */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px', gap: '10px' }}>
            <ZoomOutButton />
            <ZoomInButton />
          </div>

          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl={pdfFile}
              plugins={[zoomPluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default App;
