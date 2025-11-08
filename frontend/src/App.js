import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { 
  Header, 
  Home, 
  CosmosPage, 
  NovaPage, 
  APIPage, 
  ResearchPage, 
  SafetyPage, 
  CompanyPage, 
  LoginPage,
  Footer 
} from './components';

function App() {
  return (
    <div className="App fixed inset-0 bg-black w-screen h-screen overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cosmos" element={<CosmosPage />} />
              <Route path="/nova" element={<NovaPage />} />
              <Route path="/api" element={<APIPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/safety" element={<SafetyPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;