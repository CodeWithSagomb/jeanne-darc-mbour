import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import ScrollToTop from '../components/ui/ScrollToTop';
import { ToastProvider } from '../components/ui/Toast';

const Layout = () => {
    return (
        <ToastProvider>
            <div className="flex flex-col min-h-screen font-sans text-gray-800">
                <CustomCursor />
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow pt-20">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ToastProvider>
    );
};

export default Layout;
