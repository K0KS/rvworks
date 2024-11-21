import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TruckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Dlažby a chodníky',
    description: 'Profesionální pokládka zámkové dlažby a realizace chodníků pro soukromé i veřejné prostory.',
    features: [
      'Zámková dlažba',
      'Přírodní kámen',
      'Betonové chodníky',
      'Obrubníky',
      'Odvodnění',
      'Terénní úpravy'
    ]
  },
  {
    title: 'Ploty a oplocení',
    description: 'Kompletní realizace plotů a oplocení včetně bran a vstupních systémů.',
    features: [
      'Zděné ploty',
      'Pletivové ploty',
      'Gabionové ploty',
      'Automatické brány',
      'Branky a vjezdy',
      'Plotové systémy'
    ]
  },
  {
    title: 'Terénní úpravy',
    description: 'Profesionální úpravy terénu a zemní práce pro dokonalé využití vašeho pozemku.',
    features: [
      'Modelace terénu',
      'Výkopové práce',
      'Odvodnění pozemku',
      'Příprava pro stavbu',
      'Zakládání zahrad',
      'Zpevněné plochy'
    ]
  }
];

const VenkovniPrace = () => {
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
              <TruckIcon className="w-12 h-12 text-gold" />
              <h1>Venkovní práce</h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Specializujeme se na profesionální realizaci venkovních prací, od pokládky dlažby přes stavbu plotů až po kompletní terénní úpravy. 
              Naše služby zajistí, že váš venkovní prostor bude nejen funkční, ale i esteticky působivý.
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
            <h2 className="text-black mb-6">Potřebujete pomoc s venkovními úpravami?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Rádi vám pomůžeme s plánováním
              a realizací vašeho projektu.
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

export default VenkovniPrace;
