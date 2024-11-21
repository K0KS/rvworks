import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'Služby', href: '/sluzby' },
    { name: 'O nás', href: '/o-nas' },
    { name: 'Reference', href: '/reference' },
    { name: 'Kontaktní formulář', href: '/kontakt' },
    { name: 'GDPR', href: '/gdpr' },
  ],
  services: [
    { name: 'Rekonstrukce', href: '/sluzby/rekonstrukce' },
    { name: 'Fasády', href: '/sluzby/fasady' },
    { name: 'Inženýrské sítě', href: '/sluzby/site' },
    { name: 'Instalatérství', href: '/sluzby/instalaterstvi' },
    { name: 'Malířství', href: '/sluzby/malirstvi' },
    { name: 'Stavební práce', href: '/sluzby/stavebni-prace' },
    { name: 'Povrchové úpravy', href: '/sluzby/povrchove-upravy' },
    { name: 'Venkovní práce', href: '/sluzby/venkovni-prace' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="RV Works Logo"
              />
              <span className="font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-gold dark:group-hover:text-gold transition-colors">RV Works</span>
            </Link>
            <p className="text-base text-neutral-700 dark:text-neutral-300">
              Jsme profesionální stavební firma s dlouholetou praxí. Zaměřujeme se na kompletní stavební práce, rekonstrukce a další služby v oblasti stavebnictví.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Důležité</h3>
            <ul role="list" className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-base text-neutral-700 dark:text-neutral-300 hover:text-gold dark:hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Služby</h3>
            <ul role="list" className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-base text-neutral-700 dark:text-neutral-300 hover:text-gold dark:hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="text-base text-neutral-700 dark:text-neutral-300">
                RV Works s.r.o.<br />
                Kodaňská 432/15<br />
                101 00 Praha 10 - Vršovice
              </p>
              <p className="text-base text-neutral-700 dark:text-neutral-300">
                Tel: <a href="tel:+420602272999" className="hover:text-gold dark:hover:text-gold transition-colors">+420 602 272 999</a><br />
                Email: <a href="mailto:info@rvworks.cz" className="hover:text-gold dark:hover:text-gold transition-colors">info@rvworks.cz</a>
              </p>
              <p className="text-base text-neutral-700 dark:text-neutral-300">
                IČO: 19058659
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} RV Works s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
