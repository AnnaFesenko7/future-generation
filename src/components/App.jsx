import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import WebFont from 'webfontloader';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const News = lazy(() => import('pages/News'));
const Partners = lazy(() => import('pages/Partners'));
const Donation = lazy(() => import('pages/Donation'));

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans', 'Roboto', 'Open Sans'],
      },
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="news" element={<News />} />

          <Route path="partners" element={<Partners />} />
          <Route path="donation" element={<Donation />} />

          {/* <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegistrationPage />} /> */}
        </Route>
        <Route path="*" element={<p>There is nothing here: 404!</p>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
