import { motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  HomeModernIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  PaintBrushIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    category: 'Rekonstrukce',
    icon: <HomeModernIcon className="w-8 h-8 text-gold" />,
    path: '/sluzby/rekonstrukce',
    items: [
      {
        title: 'Rekonstrukce bytu',
        description: 'Kompletní rekonstrukce bytů včetně bytových jader.',
      },
      {
        title: 'Rekonstrukce domu',
        description: 'Celková rekonstrukce rodinných domů a bytových domů.',
      },
      {
        title: 'Rekonstrukce bytového jádra',
        description: 'Specializujeme se na rekonstrukce bytových jader.',
      },
    ],
  },
  {
    category: 'Stavební práce',
    icon: <BuildingOfficeIcon className="w-8 h-8 text-gold" />,
    path: '/sluzby/stavebni-prace',
    items: [
      {
        title: 'Stavba rodinného domu',
        description: 'Výstavba rodinných domů na klíč.',
      },
      {
        title: 'Hrubá stavba',
        description: 'Realizace hrubých staveb včetně základů.',
      },
      {
        title: 'Betonářské práce',
        description: 'Betonáže základů, stropů a dalších konstrukcí.',
      },
    ],
  },
  {
    category: 'Fasády a omítky',
    icon: <WrenchScrewdriverIcon className="w-8 h-8 text-gold" />,
    path: '/sluzby/fasady',
    items: [
      {
        title: 'Vnější omítky',
        description: 'Realizace venkovních omítek a fasád.',
      },
      {
        title: 'Vnitřní omítky',
        description: 'Provedení vnitřních omítek a štuků.',
      },
      {
        title: 'Zateplovací systémy',
        description: 'Zateplení budov certifikovanými systémy.',
      },
    ],
  },
  {
    category: 'Instalace a sítě',
    icon: <BoltIcon className="w-8 h-8 text-gold" />,
    path: '/sluzby/site',
    items: [
      {
        title: 'Elektroinstalace',
        description: 'Kompletní elektroinstalační práce a revize.',
      },
      {
        title: 'Instalatérství',
        description: 'Vodoinstalace, topení a další instalatérské práce.',
      },
      {
        title: 'Inženýrské sítě',
        description: 'Realizace a opravy inženýrských sítí.',
      },
    ],
  },
  {
    category: 'Povrchové úpravy',
    icon: <PaintBrushIcon className="w-8 h-8 text-gold" />,
    path: '/sluzby/povrchove-upravy',
    items: [
      {
        title: 'Malířské práce',
        description: 'Malování interiérů a fasád.',
      },
      {
        title: 'Natěračské práce',
        description: 'Nátěry konstrukcí a povrchů.',
      },
      {
        title: 'Podlahářské práce',
        description: 'Pokládka všech typů podlah.',
      },
    ],
  },
  {
    category: 'Venkovní práce',
    icon: <TruckIcon className="w-8 h-8 text-gold" />,
    path: '/sluzby/venkovni-prace',
    items: [
      {
        title: 'Dlažební práce',
        description: 'Pokládka zámkové dlažby a obrubníků.',
      },
      {
        title: 'Ploty a hradby',
        description: 'Stavba plotů, zdí a oplocení.',
      },
      {
        title: 'Zemní práce',
        description: 'Terénní úpravy a výkopové práce.',
      },
    ],
  },
];

const Services = () => {
  const location = useLocation();
  const isServicesRoot = location.pathname === '/sluzby';

  if (!isServicesRoot) {
    return <Outlet />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6">Naše služby</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Nabízíme komplexní stavební a rekonstrukční služby. Naším cílem je poskytovat
              kvalitní řešení pro všechny vaše stavební potřeby.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12">
            {services.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  {category.icon}
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <Link
                      key={service.title}
                      to={category.path}
                      className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-black mb-6">Potřebujete pomoc s vaším projektem?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Rádi vám pomůžeme s plánováním
              a realizací vašeho stavebního projektu.
            </p>
            <Link to="/kontakt" className="btn bg-black text-white hover:bg-black/90">
              Kontaktujte nás
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
