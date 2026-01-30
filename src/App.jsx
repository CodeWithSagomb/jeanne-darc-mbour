import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Institution from './pages/Institution';
import Pedagogie from './pages/Pedagogie';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="institution" element={<Institution />} />
        <Route path="pedagogie" element={<Pedagogie />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div className="p-20 text-center">Page non trouvée</div>} />
      </Route>
    </Routes>
  );
}

export default App;
