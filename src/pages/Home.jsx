import HeroArtistic from '../components/home/HeroArtistic';
import Introduction from '../components/home/Introduction';
import EditorialSection from '../components/home/EditorialSection';
import StatsSection from '../components/home/StatsSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
    return (
        <div className="bg-cream min-h-screen">
            <HeroArtistic />
            <Introduction />
            <EditorialSection />
            <StatsSection />
            <GallerySection />
            <TestimonialsSection />
            <CallToAction />
        </div>
    );
};

export default Home;
