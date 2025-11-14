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

### 2) IRIS — Medication + Care Chatbot

A real-time conversational assistant trained to help users understand:

- Medication side effects  
- Dosage issues  
- Concerning symptoms  
- Cycle-phase changes  
- How to track symptoms effectively  
- What to ask clinicians  
- How to phrase concerns to avoid dismissal  

**IRIS does NOT diagnose.**  
She provides:
- Known side effects  
- Clinically relevant interactions  
- When to talk to a doctor  
- Safe alternative phrasing to advocate for yourself  

**What IRIS uses**
- A small curated RAG corpus (clinically validated medication info + guidelines)
- Uploaded user documents
- Symptom descriptions
- Cycle information

**Why it’s easy to build**
- It’s a prompted Claude chatbot with retrieval  
- No feature engineering  
- Embedding pipeline already exists  

---

## Architecture Overview

### Frontend
- React + TypeScript  
- Pages: Home, Upload, Results  
- File uploader for PDFs + symptom survey  
- Renders screener results from backend JSON

### Backend
- Node.js + Express  
- Claude API (Anthropic)  
- RAG pipeline:
  - Extract → chunk → embed uploaded text  
  - Retrieve top-k relevant records  
  - Generate clinical pattern summaries  

### Endpoints (example)
