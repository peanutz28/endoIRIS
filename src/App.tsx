import React, { useState } from "react";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import ResultsPage from "./pages/ResultsPage";

type PageName = "home" | "upload" | "results";

function App() {
  const [page, setPage] = useState<PageName>("home");

  if (page === "upload") {
    return (
      <UploadPage
        onBack={() => setPage("home")}
        onSeeResults={() => setPage("results")}
      />
    );
  }

  if (page === "results") {
    return (
      <ResultsPage
        onBack={() => setPage("upload")}
        onHome={() => setPage("home")}
      />
    );
  }

  // default = home
  return <Home onNavigate={setPage} />;
}

export default App;
