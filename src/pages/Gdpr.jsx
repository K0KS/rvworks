import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const Gdpr = () => {
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
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheckIcon className="w-12 h-12 text-gold" />
              <h1 className="text-4xl font-bold tracking-tight">Zásady ochrany osobních údajů</h1>
            </div>
            <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
              V souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů, vás informujeme o zpracování vašich osobních údajů.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Správce osobních údajů */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">1. Správce osobních údajů</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Správcem osobních údajů je společnost RV Works s.r.o., se sídlem Kodaňská 432/15, Vršovice, 101 00 Praha 10, IČO: 19058659, zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 380746 (dále jen "správce").
                </p>
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">Kontaktní údaje správce:</p>
                <ul className="text-lg leading-relaxed space-y-2 list-disc pl-8 text-neutral-700 dark:text-neutral-300">
                  <li>Email: info@rvworks.cz</li>
                  <li>Telefon: +420 602 272 999</li>
                  <li>Adresa: Kodaňská 432/15, Vršovice, 101 00 Praha 10</li>
                </ul>
              </div>
            </div>

            {/* Účel a právní základ zpracování */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">2. Účel a právní základ zpracování</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Vaše osobní údaje zpracováváme pouze v rozsahu nezbytném pro následující účely:
                </p>
                <ul className="text-lg leading-relaxed space-y-3 list-disc pl-8 text-neutral-700 dark:text-neutral-300">
                  <li>Zpracování poptávky a komunikace s vámi</li>
                  <li>Plnění smlouvy a poskytování služeb</li>
                  <li>Plnění zákonných povinností</li>
                  <li>Ochrana našich oprávněných zájmů</li>
                </ul>
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Právním základem pro zpracování vašich osobních údajů je především plnění smlouvy, plnění zákonných povinností a náš oprávněný zájem.
                </p>
              </div>
            </div>

            {/* Doba zpracování */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">3. Doba zpracování</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Vaše osobní údaje zpracováváme a uchováváme po dobu nezbytně nutnou k zajištění všech práv a povinností plynoucích ze smlouvy a dále po dobu, po kterou jsme povinni údaje uchovávat podle obecně závazných právních předpisů.
                </p>
              </div>
            </div>

            {/* Vaše práva */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">4. Vaše práva</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  V souvislosti se zpracováním vašich osobních údajů máte následující práva:
                </p>
                <ul className="text-lg leading-relaxed space-y-3 list-disc pl-8 text-neutral-700 dark:text-neutral-300">
                  <li>Právo na přístup k osobním údajům</li>
                  <li>Právo na opravu nepřesných údajů</li>
                  <li>Právo na výmaz osobních údajů</li>
                  <li>Právo na omezení zpracování</li>
                  <li>Právo na přenositelnost údajů</li>
                  <li>Právo vznést námitku proti zpracování</li>
                </ul>
                <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Tato práva můžete uplatnit prostřednictvím výše uvedených kontaktních údajů. Na vaši žádost budeme reagovat bez zbytečného odkladu, nejpozději do jednoho měsíce od obdržení žádosti.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Gdpr;
