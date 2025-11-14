import React from "react";

interface ResultsPageProps {
  onBack: () => void;
  onHome: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ onBack, onHome }) => {
  return (
    <div className="page-wrapper">
      <div className="results-card">
        <div className="results-pill">STEP 3 · PRELIMINARY PATTERN</div>
        <h2 className="results-title">Your EndoIRIS screener preview</h2>
        <p className="results-summary">
          This is a placeholder layout for the result that your GitHub backend will generate.
          When wired up, this page will show the patterns detected in your uploads and survey
          answers, plus talking points for your next visit.
        </p>

        <div>
          <div className="results-section-title">Pattern highlights (example)</div>
          <ul className="results-list">
            <li>Cyclic pelvic pain &gt; 3 years with severity &gt; 7/10 on most periods.</li>
            <li>
              Non-menstrual pelvic pain with bowel or bladder symptoms that flare around the cycle.
            </li>
            <li>Incomplete relief with over-the-counter pain medications.</li>
          </ul>
        </div>

        <div>
          <div className="results-section-title">
            Questions to consider for your clinician
          </div>
          <ul className="results-list">
            <li>
              “Given my symptom pattern and duration, could endometriosis be a possibility?”
            </li>
            <li>
              “Are there imaging or referrals you’d recommend, like a pelvic ultrasound or an
              endometriosis specialist?”
            </li>
            <li>
              “What options exist for managing pain while we explore a diagnosis?”
            </li>
          </ul>
        </div>

        <div className="results-section-title">
          Implementation note (for judges / devs)
        </div>
        <p className="results-summary">
          In the full build, this section will be populated from the RAG + ML result JSON coming
          from your GitHub backend. The front-end simply renders those pattern labels, risk buckets,
          and suggested talking points.
        </p>

        <div className="results-actions">
          <button className="btn-ghost" onClick={onBack}>
            ← Back to edit inputs
          </button>
          <button className="btn-primary" onClick={onHome}>
            Back to EndoIRIS home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
