import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<ProductPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}