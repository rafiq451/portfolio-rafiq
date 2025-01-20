import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import BackToTop from '../components/Followme/BackToTop';
import Followme from '../components/Followme/Followme';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Followme />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
