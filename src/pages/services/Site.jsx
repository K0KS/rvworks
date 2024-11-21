import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BoltIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Vodovodní přípojky',
    description: 'Realizace nových vodovodních přípojek a opravy stávajících rozvodů vody.',
    features: [
      'Návrh a realizace vodovodních přípojek',
      'Výměna vodovodního potrubí',
      'Opravy havárií a úniků vody',
      'Instalace vodoměrných sestav',
      'Tlakové zkoušky potrubí',
      'Revize a údržba'
    ]
  },
  {
    title: 'Kanalizační přípojky',
    description: 'Kompletní realizace kanalizačních přípojek včetně projekční činnosti a vyřízení povolení.',
    features: [
      'Projekce kanalizačních přípojek',
      'Výstavba nových přípojek',
      'Opravy stávající kanalizace',
      'Čištění a monitoring potrubí',
      'Realizace revizních šachet',
      'Likvidace septiku a žump'
    ]
  },
  {
    title: 'Elektro přípojky',
    description: 'Realizace elektrických přípojek pro rodinné domy, bytové domy a průmyslové objekty.',
    features: [
      'Projekce elektro přípojek',
      'Realizace nových přípojek',
      'Přeložky elektrického vedení',
      'Instalace elektroměrových rozvaděčů',
      'Revize elektrických zařízení',
      'Hromosvody a uzemnění'
    ]
  }
];

const Site = () => {
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
              <BoltIcon className="w-10 h-10 text-gold" />
              <h1>Inženýrské sítě</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Zajišťujeme kompletní realizaci inženýrských sítí včetně projektové
              dokumentace a vyřízení potřebných povolení. Specializujeme se na vodovodní,
              kanalizační a elektrické přípojky pro všechny typy staveb.
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
            <h2 className="text-black mb-6">Potřebujete realizovat inženýrské sítě?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Pomůžeme vám s návrhem,
              projekční činností a realizací vašeho projektu.
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

export default Site;
