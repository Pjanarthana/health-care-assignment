import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import './styles/global.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={isSidebarOpen ? 'content-shift' : ''}>
          <Hero />
          <Features />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;