import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HomeModernIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Rekonstrukce bytů',
    description: 'Kompletní rekonstrukce bytových jednotek včetně dispozičních změn, elektroinstalace, rozvodů vody a topení.',
    features: [
      'Kompletní rekonstrukce bytů všech velikostí',
      'Dispoziční změny a bourací práce',
      'Nové rozvody elektřiny, vody a topení',
      'Výměna oken a dveří',
      'Nové podlahy a obklady',
      'Rekonstrukce koupelen a kuchyní'
    ]
  },
  {
    title: 'Rekonstrukce domů',
    description: 'Rekonstrukce rodinných domů od dílčích oprav až po kompletní přestavby včetně přístaveb a nástaveb.',
    features: [
      'Celková rekonstrukce rodinných domů',
      'Přístavby a nástavby',
      'Zateplení a fasády',
      'Rekonstrukce střech',
      'Výměna oken a dveří',
      'Modernizace vytápění'
    ]
  },
  {
    title: 'Rekonstrukce bytových jader',
    description: 'Specializujeme se na rekonstrukce bytových jader v panelových domech s důrazem na kvalitu a moderní řešení.',
    features: [
      'Kompletní rekonstrukce bytového jádra',
      'Moderní řešení koupelen',
      'Kvalitní izolace proti vlhkosti',
      'Nové rozvody vody a odpadu',
      'Elektroinstalace na míru',
      'Obklady a dlažby dle výběru'
    ]
  }
];

const Rekonstrukce = () => {
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
            <div className="flex items-center gap-4 mb-6">
              <HomeModernIcon className="w-10 h-10 text-gold" />
              <h1>Rekonstrukce</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Specializujeme se na kompletní rekonstrukce bytů, domů a bytových jader. 
              Nabízíme profesionální přístup, kvalitní materiály a precizní provedení.
              Každý projekt realizujeme na míru podle přání a potřeb klienta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
                      >
                        <ArrowRightIcon className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-black mb-6">Máte zájem o rekonstrukci?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Rádi vám pomůžeme s plánováním
              vaší rekonstrukce a připravíme nabídku na míru.
            </p>
            <Link to="/kontakt" className="btn bg-black text-white hover:bg-black/90">
              Nezávazná konzultace
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Rekonstrukce;
