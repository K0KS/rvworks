import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Zkušený tým',
    description: 'Náš tým tvoří kvalifikovaní odborníci s mnohaletými zkušenostmi v oboru.',
    icon: UserGroupIcon,
  },
  {
    name: 'Komplexní služby',
    description: 'Poskytujeme kompletní stavební a rekonstrukční služby pod jednou střechou.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Kvalitní provedení',
    description: 'Používáme kvalitní materiály a dbáme na precizní provedení každého detailu.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Dodržování termínů',
    description: 'Zakládáme si na dodržování dohodnutých termínů a časových harmonogramů.',
    icon: ClockIcon,
  },
];

const About = () => {
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
            <h1 className="mb-6">O společnosti RV Works</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              RV Works s.r.o. je česká stavební společnost se sídlem v Praze ve Vršovicích.
              Nabízíme širokou škálu stavebních a rekonstrukčních služeb s důrazem na kvalitu
              a spokojenost našich klientů.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto h-12 w-12 text-gold">
                  <feature.icon />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{feature.name}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Naše historie a hodnoty</h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                <p>
                  Společnost RV Works s.r.o. byla založena v únoru 2023 s cílem poskytovat
                  kvalitní stavební a rekonstrukční služby v Praze a okolí. Od našeho vzniku
                  jsme se zaměřili na budování silného týmu odborníků a vytváření
                  dlouhodobých vztahů s našimi klienty.
                </p>
                <p>
                  Naším hlavním cílem je poskytovat kvalitní služby za přijatelné ceny
                  a zajišťovat maximální spokojenost našich klientů. Věříme, že klíčem
                  k úspěchu je profesionální přístup, otevřená komunikace a důraz na detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Firemní údaje</h3>
                <dl className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <div className="flex justify-between">
                    <dt>Název společnosti:</dt>
                    <dd>RV Works s.r.o.</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>IČO:</dt>
                    <dd>19058659</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Jednatel:</dt>
                    <dd>Radoslav Christian Klán</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Spisová značka:</dt>
                    <dd>C 380746 vedená u MS v Praze</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Kontaktní údaje</h3>
                <dl className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <div className="flex justify-between">
                    <dt>Adresa:</dt>
                    <dd>Kodaňská 432/15, Vršovice</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Město:</dt>
                    <dd>101 00 Praha 10</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Telefon:</dt>
                    <dd>
                      <a href="tel:+420602272999" className="hover:text-gold">
                        +420 602 272 999
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>E-mail:</dt>
                    <dd>
                      <a href="mailto:info@rvworks.cz" className="hover:text-gold">
                        info@rvworks.cz
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Začněme spolupracovat</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
              Hledáte spolehlivého partnera pro váš stavební projekt? Kontaktujte nás
              a my vám pomůžeme s realizací vašich představ.
            </p>
            <Link to="/kontakt" className="btn btn-primary">
              Kontaktujte nás
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
