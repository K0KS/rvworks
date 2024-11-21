import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PaintBrushIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Interiérové malování',
    description: 'Profesionální malířské služby pro váš domov či komerční prostory s důrazem na kvalitu a čistotu práce.',
    features: [
      'Malování stěn a stropů',
      'Dekorativní techniky',
      'Strukturované povrchy',
      'Barevné konzultace',
      'Příprava povrchů',
      'Drobné opravy omítek'
    ]
  },
  {
    title: 'Fasádní nátěry',
    description: 'Ochranné a dekorativní nátěry fasád s garancí dlouhodobé životnosti a estetického vzhledu.',
    features: [
      'Fasádní barvy',
      'Penetrační nátěry',
      'Sanační nátěry',
      'Ochranné nátěry',
      'Čištění fasád',
      'Opravy prasklin'
    ]
  },
  {
    title: 'Speciální nátěry',
    description: 'Specializované nátěry pro různé povrchy a specifické požadavky.',
    features: [
      'Protiplísňové nátěry',
      'Antibakteriální úpravy',
      'Izolační nátěry',
      'Nátěry na kov',
      'Nátěry na dřevo',
      'Epoxidové nátěry'
    ]
  }
];

const Malirstvi = () => {
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
              <PaintBrushIcon className="w-10 h-10 text-gold" />
              <h1>Malířské práce</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Nabízíme kompletní malířské služby pro interiéry i exteriéry. Naše práce
              se vyznačuje precizností, čistotou provedení a použitím kvalitních
              materiálů. Garantujeme profesionální přístup a perfektní výsledek.
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
            <h2 className="text-black mb-6">Plánujete malování?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Pomůžeme vám s výběrem barev,
              technikou malování a naplánováním celého projektu.
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

export default Malirstvi;
