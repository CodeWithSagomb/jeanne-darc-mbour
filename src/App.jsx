import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

// Lazy loading des pages pour une meilleure performance
const Home = lazy(() => import('./pages/Home'));
const Institution = lazy(() => import('./pages/Institution'));
const Pedagogie = lazy(() => import('./pages/Pedagogie'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Contact = lazy(() => import('./pages/Contact'));
const Actualites = lazy(() => import('./pages/Actualites'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Composant de chargement élégant
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-violine/20 border-t-violine rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-violine font-medium">Chargement...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="institution" element={<Institution />} />
          <Route path="pedagogie" element={<Pedagogie />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
