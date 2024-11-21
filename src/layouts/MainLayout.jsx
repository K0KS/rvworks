import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
