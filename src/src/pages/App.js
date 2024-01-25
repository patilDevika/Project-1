
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Updated path

import Switchmode from '../pages/switchmode';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Switchmode />} />
        </Routes>
    </Router>
  );
}

export default App;




