# EndoIRIS — AI-Assisted Support for Endometriosis Care

EndoIRIS is an AI-powered platform that helps people make sense of years of symptoms, portal notes, and scattered health data. It transforms messy records into a clear, clinic-ready story using retrieval-augmented generation (RAG), document embeddings, and a medication-aware conversational agent.

EndoIRIS does **not** diagnose disease.  
It organizes, retrieves, and explains information so patients can advocate for themselves in the exam room.

---

## Features

### 1) Endo Screener (RAG-Based Pattern Extractor)

A retrieval-augmented screening tool that analyzes uploaded health documents (PDF/TXT/MyChart exports) and patient-entered symptom descriptions.

**Inputs**
- PDFs or TXT files from MyChart, lab reports, clinical notes
- Free-text symptom descriptions
- Quick symptom survey

**Outputs**
- Pattern alignment (non-diagnostic)
- Red flags
- Possible subtype patterns
- Cycle-phase relevance
- Misdiagnosis pitfalls (IBS, IC, PID)
- Visit-ready talking points

**Why this matters**
- Tight RAG → minimal hallucination  
- Uses embeddings over user documents  
- Extremely judge-friendly demo (upload → patterns → prep sheet)

---
