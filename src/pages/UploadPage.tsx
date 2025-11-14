import React, { useState, ChangeEvent } from "react";

interface UploadPageProps {
  onBack: () => void;
  onSeeResults: () => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ onBack, onSeeResults }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className="page-wrapper">
      <div className="upload-card">
        {/* LEFT: upload box */}
        <div>
          <div className="upload-step-pill">STEP 1 · UPLOAD YOUR RECORDS</div>
          <h2 className="upload-title">Bring your history with you.</h2>
          <p className="upload-text">
            Upload PDFs or TXT exports from MyChart, lab reports, or symptom logs.
            EndoIRIS will only use these files to power the screener and visit prep.
          </p>

          <label className="file-upload-box">
            <div className="file-upload-title">
              Drop files here or click to browse
            </div>
            <div className="file-upload-sub">
              We support PDFs and plain text files (.pdf, .txt). You can add more than one.
            </div>
            <input
              className="file-input"
              type="file"
              multiple
              accept=".pdf,.txt,application/pdf,text/plain"
              onChange={handleFileChange}
            />
          </label>

          {files.length > 0 && (
            <div className="file-list">
              {files.map((file) => (
                <span key={file.name} className="file-pill">
                  {file.name}
                </span>
              ))}
            </div>
          )}

          <div className="upload-buttons">
            <button className="btn-ghost" onClick={onBack}>
              ← Back to intro
            </button>
          </div>
        </div>

        {/* RIGHT: survey questions */}
        <div>
          <div className="survey-header">Quick symptom check</div>
          <div className="survey-sub">
            These questions mirror common endometriosis screening prompts and
            help the screener understand your pattern of pain.
          </div>

          <div className="survey-grid">
            <div className="question-group">
              <label>How long have you had pelvic pain?</label>
              <select defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="<1yr">Less than 1 year</option>
                <option value="1-3yrs">1–3 years</option>
                <option value="3-7yrs">3–7 years</option>
                <option value=">7yrs">More than 7 years</option>
              </select>
            </div>

            <div className="question-group">
              <label>How severe is your period pain on most cycles? (0–10)</label>
              <input type="number" min={0} max={10} placeholder="e.g. 8" />
            </div>

            <div className="question-group">
              <label>Do you have pain outside your period?</label>
              <select defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="no">No, only during my period</option>
                <option value="some">Yes, sometimes between periods</option>
                <option value="often">Yes, most days</option>
              </select>
            </div>

            <div className="question-group">
              <label>Any bowel or bladder symptoms during flares?</label>
              <select defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="none">None</option>
                <option value="bowel">
                  Bowel changes (constipation, diarrhea, painful bowel movements)
                </option>
                <option value="bladder">
                  Bladder urgency/frequency or burning without infection
                </option>
                <option value="both">Both bowel and bladder issues</option>
              </select>
            </div>

            <div className="question-group">
              <label>
                Does intercourse or pelvic exams cause deep pelvic pain?
              </label>
              <select defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="never">Never</option>
                <option value="sometimes">Sometimes</option>
                <option value="often">Often / usually</option>
              </select>
            </div>

            <div className="question-group">
              <label>
                Have over-the-counter pain meds fully controlled your pain?
              </label>
              <select defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="yes">Yes, they usually work</option>
                <option value="partial">They help a little but not enough</option>
                <option value="no">No, my pain often breaks through medications</option>
              </select>
            </div>
          </div>

          <div className="question-group">
            <label>
              Anything else about your cycle, fatigue, or family history that feels important?
            </label>
            <textarea placeholder="Optional free-text notes…" />
          </div>

          <div className="upload-buttons">
            <button className="btn-primary" onClick={onSeeResults}>
              See my results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
