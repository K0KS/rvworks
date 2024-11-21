import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Zateplovací systémy',
    description: 'Realizace kompletních zateplovacích systémů pro rodinné domy, bytové domy a komerční objekty.',
    features: [
      'Certifikované zateplovací systémy',
      'Výběr optimální tloušťky izolace',
      'Řešení tepelných mostů',
      'Paropropustné systémy',
      'Požárně bezpečné řešení',
      'Dlouhá životnost'
    ]
  },
  {
    title: 'Fasádní omítky',
    description: 'Realizace všech typů fasádních omítek s důrazem na kvalitu provedení a dlouhou životnost.',
    features: [
      'Silikonové omítky',
      'Akrylátové omítky',
      'Minerální omítky',
      'Mozaikové omítky',
      'Strukturované omítky',
      'Hladké omítky'
    ]
  },
  {
    title: 'Opravy a renovace',
    description: 'Opravy a renovace stávajících fasád včetně sanace problémových míst a řešení vlhkosti.',
    features: [
      'Sanace vlhkého zdiva',
      'Opravy prasklin',
      'Renovace historických fasád',
      'Nátěry fasád',
      'Čištění fasád',
      'Antigraffiti nátěry'
    ]
  }
];

const Fasady = () => {
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
              <BuildingOfficeIcon className="w-10 h-10 text-gold" />
              <h1>Fasády a zateplení</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Nabízíme komplexní řešení v oblasti fasád a zateplení budov. Od návrhu
              přes realizaci až po dokončení dbáme na kvalitu materiálů a precizní
              provedení. Zajistíme energetické úspory a atraktivní vzhled vaší nemovitosti.
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
            <h2 className="text-black mb-6">Plánujete zateplení nebo novou fasádu?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Připravíme vám nabídku na míru
              včetně výpočtu energetických úspor a vizualizace.
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

export default Fasady;
