import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Novostavby',
    description: 'Kompletní realizace novostaveb rodinných domů a komerčních objektů na klíč.',
    features: [
      'Rodinné domy',
      'Bytové domy',
      'Komerční objekty',
      'Průmyslové stavby',
      'Základové desky',
      'Inženýrské sítě'
    ]
  },
  {
    title: 'Hrubé stavby',
    description: 'Realizace hrubých staveb včetně základů a všech nosných konstrukcí.',
    features: [
      'Základové konstrukce',
      'Svislé konstrukce',
      'Vodorovné konstrukce',
      'Střešní konstrukce',
      'Izolace staveb',
      'Statické zajištění'
    ]
  },
  {
    title: 'Betonářské práce',
    description: 'Profesionální betonářské práce s využitím moderních technologií a postupů.',
    features: [
      'Monolitické konstrukce',
      'Průmyslové podlahy',
      'Základové desky',
      'Stropní konstrukce',
      'Betonové ploty',
      'Betonové schodiště'
    ]
  }
];

const StavebniPrace = () => {
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
              <BuildingOfficeIcon className="w-12 h-12 text-gold" />
              <h1>Stavební práce</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Poskytujeme komplexní stavební služby od základů až po střechu. Specializujeme 
              se na výstavbu rodinných domů, komerčních objektů a realizaci hrubých staveb. 
              Kvalita a spokojenost zákazníka jsou pro nás prioritou.
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
                className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {service.description}
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ArrowRightIcon className="w-5 h-5 text-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-black mb-6">Plánujete stavbu?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Pomůžeme vám s plánováním
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

export default StavebniPrace;
