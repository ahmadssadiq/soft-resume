// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NoteTakingApplication from './components/NoteTakingApplication';
import BostonPoliceOvertime from './components/BostonPoliceOvertime';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Project pages */}
        <Route path="/projects/Note-Taking-Application" element={<NoteTakingApplication />} />
        <Route path="/projects/Boston-Police-Overtime" element={<BostonPoliceOvertime />} />
      </Routes>
    </Router>
  );
}

export default App;