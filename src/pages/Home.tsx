import React from "react";

type PageName = "home" | "upload" | "results";

interface HomeProps {
  onNavigate: (page: PageName) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleUploadClick = () => {
    onNavigate("upload");
  };

  const go = (page: PageName) => {
    onNavigate(page);
  };

  return (
    <div className="app-wrapper">
      <div className="hero-card">
        {/* decorative blobs */}
        <div className="hero-mint-circle" />
        <div className="hero-blob-right" />

        <div className="hero-content">
          {/* LEFT SIDE – hero text */}
          <div>
            <div className="hero-tag">ENDOMETRIOSIS · AI-ASSISTED CARE</div>
            <h1 className="hero-title">EndoIRIS</h1>
            <p className="hero-subtitle">A step forward in endometriosis care.</p>
            <p className="hero-text">
              EndoIRIS helps people turn years of scattered symptoms and records into a clear,
              clinic-ready story, and supports them between visits with a gentle, medication-aware
              chatbot.
            </p>

            <div className="hero-chip-row">
              <span className="hero-chip">Endo Screener</span>
              <span className="hero-chip">Doctor Visit Prep Sheet</span>
              <span className="hero-chip">IRIS Care Chatbot</span>
            </div>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => go("upload")}
              >
                Start with the Endo Screener
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="#db2777"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="btn-ghost" onClick={handleUploadClick}>
                Upload my records
              </button>
            </div>

            <div className="hero-names">
              Ria Saheta · Shreya Rao · Siri Peddinti
            </div>
          </div>

          {/* RIGHT SIDE – info card + stats */}
          <div className="info-card">
            <div className="info-heading">HOW ENDOIRIS HELPS</div>

            <div className="info-section">
              <div className="info-section-title">Endo Screener</div>
              <p className="info-section-text">
                Uses retrieval over uploaded health records and symptom descriptions to highlight
                endometriosis-like patterns, red flags, and common misdiagnoses.
              </p>
            </div>

            <div className="info-section">
              <div className="info-section-title">Doctor Visit Prep Sheet</div>
              <p className="info-section-text">
                Turns messy portals and notes into a one-page summary with chief complaint,
                symptom timeline, past tests, and questions that make doctors pay attention.
              </p>
            </div>

            <div className="info-section">
              <div className="info-section-title">IRIS Care Chatbot</div>
              <p className="info-section-text">
                A medication-aware companion that explains side effects, dosage concerns, and
                follow-up questions to bring to your clinician—never replacing medical advice.
              </p>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-number">10%</div>
                <div className="stat-label">
                  of reproductive-age women live with endometriosis
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">7–12 yrs</div>
                <div className="stat-label">
                  typical delay from first symptoms to diagnosis
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+ docs</div>
                <div className="stat-label">
                  many patients see before their pain is taken seriously
                </div>
              </div>
            </div>

            <div className="info-disclaimer">
              EndoIRIS does not diagnose or treat disease. It helps people organize information so
              they can advocate for themselves in the exam room.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
