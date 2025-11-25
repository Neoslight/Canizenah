
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Page, NavParams } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [navParams, setNavParams] = useState<NavParams | undefined>(undefined);

  const handleNavigate = (page: Page, params?: NavParams) => {
    setCurrentPage(page);
    // If params are provided, set them. If not, we might want to keep old params 
    // OR clear them depending on desired UX. 
    // For this case, we clear them unless explicitly provided, 
    // to avoid stale data when clicking "Contact" from menu after clicking a date.
    setNavParams(params); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} />;
      case Page.SERVICES:
        return <Services onNavigate={handleNavigate} />;
      case Page.ABOUT:
        return <About onNavigate={handleNavigate} />;
      case Page.CONTACT:
        return <Contact onNavigate={handleNavigate} initialParams={navParams} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
