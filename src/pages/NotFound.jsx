import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-gold mb-4">404</h1>
        <h2 className="mb-6">Stránka nenalezena</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje.
        </p>
        <Link to="/" className="btn btn-primary">
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
