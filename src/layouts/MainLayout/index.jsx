import React from 'react';
import NavBar from '../../components/ui/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/ui/Footer';

const MainLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-between m-0">
      <NavBar />

      <div className="flex-grow w-full px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
