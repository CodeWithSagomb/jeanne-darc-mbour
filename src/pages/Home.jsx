import HeroArtistic from '../components/home/HeroArtistic';
import EditorialSection from '../components/home/EditorialSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
    return (
        <div className="bg-beige min-h-screen">
            <HeroArtistic />
            <EditorialSection />
            <StatsSection />
            <TestimonialsSection />
            <CallToAction />
        </div>
    );
};

export default Home;
