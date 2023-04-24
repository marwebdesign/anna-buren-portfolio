import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarSv } from 'components/NavbarSv';
import { HomeSv } from 'components/HomeSv'
import { AboutSv } from 'components/AboutSv';
import { PortfolioSv } from 'components/PortfolioSv';
import { ContactSv } from 'components/ContactSv';

export const MainSv = () => {
  return (
    <BrowserRouter>
      <NavbarSv />
      <Routes>
        <Route path="/homesv" element={<HomeSv />} />
        <Route path="/aboutsv" element={<AboutSv />} />
        <Route path="/portfoliosv" element={<PortfolioSv />} />
        <Route path="/contactsv" element={<ContactSv />} />
      </Routes>
    </BrowserRouter>
  );
}