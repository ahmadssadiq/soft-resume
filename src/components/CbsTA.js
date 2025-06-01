// src/components/CBS-TA.js
import React, { useState } from 'react';
import Header from './Header';                  // Common header
import './NoteTakingApplication.css';           // Re-use existing project styles
import Footer from './Footer';

// --- images (swap in real file names when available) ------------------------
import CBSTAOverview from '../images/CBSTA_Overview.png';
import CBSTARuntime from '../images/CBSTA_Runtime.png';
import CBSTAConflict from '../images/CBSTA_Conflict.png';
import CBSTAPaper from '../images/CBS-TA_Paper.pdf'; // Link to the full paper
// ---------------------------------------------------------------------------

function CbsTA() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="project-page">
      <Header />

      <div className="project-content-wrapper">
        <h1 className="project-title">
          Conflict-Based Search&nbsp;(CBS-TA) Performance Analysis{' '}
          <span role="img" aria-label="robot">🤖</span>
        </h1>

        <section className="project-content">
          {/* ----- LEFT: description ----- */}
          <div className="project-description">
            <h2>Overview</h2>
            <p>
              A research study profiling <strong>Conflict-Based Search&nbsp;
                with Task Assignment (CBS-TA)</strong>&nbsp;— an optimal multi-agent
              path-finding algorithm that simultaneously allocates tasks and
              plans collision-free routes. We benchmarked CBS-TA on&nbsp;32×32 and
              8×8 grids (up&nbsp;to 100&nbsp;agents), measured runtime,
              memory, cache behaviour, and pinpointed scalability bottlenecks.
            </p>

            <h2>Key Contributions</h2>
            <ul>
              <li>
                Empirically showed runtime grows <em>exponentially</em> &amp;
                conflicts <em>quadratically</em> beyond&nbsp;80 agents.
              </li>
              <li>
                Captured processor-level stats with&nbsp;<code className="code-block">perf</code>&nbsp;and&nbsp;<code className="code-block">Cachegrind</code> – billions of instructions, L1 miss hotspots.
              </li>
              <li>
                Proposed heuristics, memory-layout tweaks, and
                parallel low-level search to cut runtime &amp; RAM.
              </li>
              <li>
                Authored the full IEEE-style paper&nbsp;(10 pp) and automated
                data-collection scripts.
              </li>
            </ul>

            <h2>In Depth</h2>
            <p>
              The analysis revealed a dramatic spike in search-tree size once
              agent count passes&nbsp;50, with memory soaring from&nbsp;50 MB to
              over&nbsp;300 MB at&nbsp;100 agents. Profiling on an 8×8 grid
              isolated cache-usage inefficiencies driving these costs. The paper
              outlines heuristic conflict prioritisation, bounded-suboptimal
              search, and parallelised low-level A* replanning as practical
              paths forward.
            </p>

            {/* ---------- links ---------- */}
            <div className="project-links">
              <a
                href={CBSTAPaper}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Read Full PDF
              </a>
            </div>
          </div>

          {/* ----- RIGHT: image gallery ----- */}
          <div className="project-images">
            <img
              src={CBSTAOverview}
              alt="CBS-TA overview diagram"
              onClick={() => setModalImage(CBSTAOverview)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Algorithm overview</strong>&nbsp;showing dual-level
              search across task-assignment trees.
            </p>

            <img
              src={CBSTARuntime}
              alt="Runtime vs agents chart"
              onClick={() => setModalImage(CBSTARuntime)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Runtime curve</strong>&nbsp;— exponential rise beyond&nbsp;80 agents.
            </p>

            <img
              src={CBSTAConflict}
              alt="Conflicts vs agents chart"
              onClick={() => setModalImage(CBSTAConflict)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Conflict count</strong>&nbsp;grows quadratically,
              driving search-tree explosion.
            </p>
          </div>
        </section>
      </div>

      {/* ----- modal for full-size images ----- */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Enlarged view" />
            <button onClick={() => setModalImage(null)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CbsTA;