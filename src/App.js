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
import DuneAI from './components/DuneAI';
import DeveloperTok from './components/DeveloperTok';
import CbsTA from './components/CbsTA';
import IWM from './components/IWM';
import Blogs from './components/Blogs';

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
        <Route path="/projects/DeveloperTok" element={<DeveloperTok />} />
        <Route path="/experience/DuneAI" element={<DuneAI />} />
        <Route path="/experience/IWM" element={<IWM />} />
        <Route path="/projects/CbsTA" element={<CbsTA />} />
      </Routes>
    </Router>
  );
}

export default App;