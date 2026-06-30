import React from 'react';
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500 selection:text-zinc-950">
      {/* Accessibility bypass link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-zinc-950 px-4 py-2 rounded font-bold z-50 transition-all"
      >
        Skip to content
      </a>

      {/* Primary Athlete Portfolio View Component */}
      <div id="main-content">
        <Portfolio />
      </div>
    </main>
  );
}

export default App;