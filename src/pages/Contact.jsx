import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6">Kontaktujte nás</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
            Máte dotaz nebo chcete nezávaznou konzultaci? Neváhejte nás kontaktovat.
            Ozveme se vám co nejdříve zpět.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Jméno a příjmení
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-gold"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Odeslat zprávu
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontaktní informace</h3>
              <div className="space-y-4">
                <a
                  href="tel:+420602272999"
                  className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400 hover:text-gold"
                >
                  <PhoneIcon className="h-6 w-6" />
                  <span>+420 602 272 999</span>
                </a>
                <a
                  href="mailto:info@rvworks.cz"
                  className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400 hover:text-gold"
                >
                  <EnvelopeIcon className="h-6 w-6" />
                  <span>info@rvworks.cz</span>
                </a>
                <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
                  <MapPinIcon className="h-6 w-6" />
                  <div>
                    <p>Kodaňská 432/15</p>
                    <p>Vršovice, 101 00 Praha 10</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                  Společnost RV Works s.r.o. je zapsaná v OR vedeném MS v Praze, oddíl C, vložka 380746
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Mapa</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  title="Mapa sídla společnosti"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9582112876287!2d14.4663663!3d50.0714444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b936f05ecf06b%3A0x5c6ad76dbbe4c588!2sKoda%C5%88sk%C3%A1%20432%2F15%2C%20101%2000%20Praha%2010-Vr%C5%A1ovice!5e0!3m2!1scs!2scz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
