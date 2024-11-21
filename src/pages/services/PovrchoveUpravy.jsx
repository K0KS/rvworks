import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PaintBrushIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Malířské práce',
    description: 'Profesionální malířské služby pro interiéry i exteriéry s důrazem na kvalitu a čistotu provedení.',
    features: [
      'Malování interiérů',
      'Malování fasád',
      'Dekorativní malby',
      'Nátěry kovových konstrukcí',
      'Airless stříkání',
      'Odstraňování tapet'
    ]
  },
  {
    title: 'Podlahářské práce',
    description: 'Kompletní realizace podlah včetně přípravy podkladu a finálních úprav.',
    features: [
      'Vinylové podlahy',
      'Laminátové podlahy',
      'Dřevěné podlahy',
      'Dlažby a obklady',
      'Nivelace podkladu',
      'Renovace podlah'
    ]
  },
  {
    title: 'Speciální povrchové úpravy',
    description: 'Realizace speciálních povrchových úprav pro jedinečný vzhled a maximální ochranu.',
    features: [
      'Epoxidové nátěry',
      'Antikorozní nátěry',
      'Protipožární nátěry',
      'Benátský štuk',
      'Dekorativní stěrky',
      'Ochranné nástřiky'
    ]
  }
];

const PovrchoveUpravy = () => {
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
              <PaintBrushIcon className="w-12 h-12 text-gold" />
              <h1>Povrchové úpravy</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Nabízíme komplexní služby v oblasti povrchových úprav, od klasického malování 
              přes podlahářské práce až po speciální dekorativní techniky. Garantujeme 
              profesionální přístup a prvotřídní kvalitu provedení.
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
            <h2 className="text-black mb-6">Máte zájem o naše služby?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Rádi vám pomůžeme s výběrem
              nejvhodnějšího řešení pro váš projekt.
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

export default PovrchoveUpravy;
