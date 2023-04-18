import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'components/Navbar';
import { Home } from 'components/Home'
import { About } from 'components/About';
import { Portfolio } from 'components/Portfolio';
import { Contact } from 'components/Contact';
import { Thanks } from 'components/Thanks';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}