// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NoteTakingApplication from './components/NoteTakingApplication';
import BostonPoliceOvertime from './components/BostonPoliceOvertime';
import QuizIt from './components/QuizIt';
import ScrollToTop from './components/ScrollToTop';
import HealthAndWeather from './components/HealthAndWeather';

function App() {
  return (
    <Router>
      {/* This component will scroll the window to the top on route changes */}
      <ScrollToTop />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* Project pages */}
        <Route path="/projects/Note-Taking-Application" element={<NoteTakingApplication />} />
        <Route path="/projects/Boston-Police-Overtime" element={<BostonPoliceOvertime />} />
        <Route path="/projects/Quiz-It" element={<QuizIt />} />
        <Route path="/projects/Health-And-Weather" element={<HealthAndWeather />} />
      </Routes>
    </Router>
  );
}

export default App;