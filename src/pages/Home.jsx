import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Rekonstrukce',
    description: 'Kompletní rekonstrukce domů, bytů a komerčních prostor.',
    icon: '🏠',
    href: '/sluzby/rekonstrukce',
  },
  {
    title: 'Fasády',
    description: 'Realizace a opravy fasád, zateplení budov.',
    icon: '🏢',
    href: '/sluzby/fasady',
  },
  {
    title: 'Inženýrské sítě',
    description: 'Výstavba a rekonstrukce inženýrských sítí.',
    icon: '🔧',
    href: '/sluzby/site',
  },
  {
    title: 'Instalatérství',
    description: 'Kompletní instalatérské práce a opravy.',
    icon: '🚰',
    href: '/sluzby/instalaterstvi',
  },
  {
    title: 'Malířství',
    description: 'Malířské a natěračské práce.',
    icon: '🎨',
    href: '/sluzby/malirstvi',
  },
  {
    title: 'Další služby',
    description: 'Prohlédněte si všechny naše služby.',
    icon: '➕',
    href: '/sluzby',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[540px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.jpg')`,
            backgroundPosition: '50% 50%',
            transform: 'scale(1.01)', /* Prevents potential white edges */
          }}
        >
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-white mb-6">
              Profesionální stavební služby pro váš domov
            </h1>
            <p className="text-lg text-neutral-200 mb-8">
              RV Works s.r.o. je česká stavební společnost nabízející širokou škálu stavebních a rekonstrukčních služeb.
              Zaměřujeme se na kvalitu, spolehlivost a spokojenost našich klientů.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn btn-primary">
                Nezávazná konzultace
              </Link>
              <Link to="/reference" className="btn btn-outline">
                Naše reference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-neutral-100 dark:bg-neutral-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Naše služby</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Poskytujeme komplexní stavební a rekonstrukční služby. Od drobných oprav až po rozsáhlé projekty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.href}
                  className="block p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Proč si vybrat RV Works?</h2>
              <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400">
                <p>
                  Jsme česká stavební společnost s bohatými zkušenostmi v oboru. Naším cílem je poskytovat
                  kvalitní služby za přijatelné ceny a zajišťovat maximální spokojenost našich klientů.
                </p>
                <p>
                  Nabízíme komplexní řešení pro rekonstrukce a výstavbu. Snažíme se pokrýt všechny
                  potřebné stavební a rekonstrukční služby pod jednou střechou.
                </p>
                <div className="pt-4">
                  <Link to="/o-nas" className="btn btn-primary">
                    Více o nás
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gold aspect-square rounded-lg" />
                <div className="bg-neutral-200 dark:bg-neutral-800 aspect-square rounded-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-neutral-200 dark:bg-neutral-800 aspect-square rounded-lg" />
                <div className="bg-gold aspect-square rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gold">
        <div className="container text-center">
          <h2 className="text-black mb-6">Začněme spolupracovat</h2>
          <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
            Máte projekt nebo potřebujete poradit? Neváhejte nás kontaktovat.
            Rádi vám pomůžeme s realizací vašich představ.
          </p>
          <Link to="/kontakt" className="btn bg-black text-white hover:bg-black/90">
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
