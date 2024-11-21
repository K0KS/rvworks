import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Rekonstrukce bytového domu',
    location: 'Praha 10 - Vršovice',
    description: 'Kompletní rekonstrukce bytového domu včetně fasády, střechy a společných prostor.',
    year: '2023',
    imageUrl: '/references/project1.jpg',
  },
  {
    title: 'Novostavba rodinného domu',
    location: 'Praha - západ',
    description: 'Výstavba moderního rodinného domu na klíč včetně terénních úprav.',
    year: '2023',
    imageUrl: '/references/project2.jpg',
  },
  {
    title: 'Rekonstrukce komerčních prostor',
    location: 'Praha 1',
    description: 'Přestavba kancelářských prostor včetně nových rozvodů a klimatizace.',
    year: '2023',
    imageUrl: '/references/project3.jpg',
  },
  {
    title: 'Bytové jádro a koupelna',
    location: 'Praha 4',
    description: 'Rekonstrukce bytového jádra a modernizace koupelny v panelovém domě.',
    year: '2023',
    imageUrl: '/references/project4.jpg',
  },
  {
    title: 'Zateplení bytového domu',
    location: 'Praha 5',
    description: 'Kompletní zateplení fasády bytového domu a výměna oken.',
    year: '2023',
    imageUrl: '/references/project5.jpg',
  },
  {
    title: 'Průmyslová hala',
    location: 'Středočeský kraj',
    description: 'Výstavba průmyslové haly včetně administrativního zázemí.',
    year: '2023',
    imageUrl: '/references/project6.jpg',
  },
];

const References = () => {
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
            <h1 className="mb-6">Reference</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Prohlédněte si naše dokončené projekty. Každý projekt je jedinečný a odráží
              naši péči o detail a kvalitu provedení.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-neutral-200 dark:bg-neutral-700">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
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
            <h2 className="text-black mb-6">Máte zájem o spolupráci?</h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-8">
              Kontaktujte nás pro nezávaznou konzultaci vašeho projektu. Rádi vám pomůžeme
              s realizací vašich stavebních plánů.
            </p>
            <a
              href="/kontakt"
              className="btn bg-black text-white hover:bg-black/90"
            >
              Kontaktujte nás
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default References;
