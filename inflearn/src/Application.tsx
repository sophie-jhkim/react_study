import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';

const Application = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about">
          <Route index element={<About />} />
          <Route path=":number" element={<About />} />
        </Route>
        <Route path="layout" element={<Layout />}>
          <Route index element={<About />} />
          <Route path=":number" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
