import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WrenchScrewdriverIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Vodoinstalace',
    description: 'Kompletní instalace a opravy vodovodních rozvodů v domácnostech i komerčních prostorech.',
    features: [
      'Rozvody teplé a studené vody',
      'Výměna vodovodního potrubí',
      'Instalace vodoměrů',
      'Opravy úniků vody',
      'Montáž sanitární techniky',
      'Pravidelný servis'
    ]
  },
  {
    title: 'Topení',
    description: 'Instalace a servis topných systémů všech typů pro maximální komfort a úsporu energie.',
    features: [
      'Instalace radiátorů',
      'Podlahové vytápění',
      'Tepelná čerpadla',
      'Plynové kotle',
      'Elektrické vytápění',
      'Regulace topení'
    ]
  },
  {
    title: 'Odpadní systémy',
    description: 'Realizace a opravy odpadních systémů včetně řešení havarijních stavů.',
    features: [
      'Instalace odpadního potrubí',
      'Čištění odpadů',
      'Kamerové prohlídky',
      'Opravy kanalizace',
      'Napojení spotřebičů',
      'Řešení havárií'
    ]
  }
];

const Instalaterstvi = () => {
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
              <WrenchScrewdriverIcon className="w-10 h-10 text-gold" />
              <h1>Instalatérské práce</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Poskytujeme profesionální instalatérské služby pro domácnosti i firmy.
              Specializujeme se na rozvody vody, topení a odpadní systémy. Nabízíme
              kvalitní řešení, spolehlivý servis a pohotovostní službu.
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
            <h2 className="text-black mb-6">Řešíte instalatérské práce?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Naši odborníci vám pomohou
              s návrhem řešení a realizací vašeho projektu.
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

export default Instalaterstvi;
