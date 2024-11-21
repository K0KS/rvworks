import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'Služby', href: '/sluzby' },
  { name: 'O nás', href: '/o-nas' },
  { name: 'Reference', href: '/reference' },
  { name: 'Kontakt', href: '/kontakt' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-3">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="sr-only">RV Works s.r.o.</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="RV Works Logo" />
              <span className="font-bold text-lg text-neutral-900 dark:text-neutral-100">RV Works</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-bold leading-6 transition-colors ${
                    isActive
                      ? 'text-gold dark:text-gold'
                      : 'text-neutral-900 dark:text-neutral-100 hover:text-gold dark:hover:text-gold'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg p-2.5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label={darkMode ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-50 dark:bg-neutral-950 px-4 py-4 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">RV Works s.r.o.</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="RV Works Logo" />
              <span className="font-bold text-lg text-neutral-900 dark:text-neutral-100">RV Works</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Zavřít menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-200 dark:divide-neutral-800">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-base font-bold leading-7 transition-colors ${
                        isActive
                          ? 'text-gold dark:text-gold bg-neutral-100 dark:bg-neutral-900'
                          : 'text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    setDarkMode(!darkMode);
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <span>{darkMode ? 'Světlý režim' : 'Tmavý režim'}</span>
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
