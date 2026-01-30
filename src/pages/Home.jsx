import HeroArtistic from '../components/home/HeroArtistic';
import EditorialSection from '../components/home/EditorialSection';
import StatsSection from '../components/home/StatsSection';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
    return (
        <div className="bg-beige min-h-screen">
            <HeroArtistic />
            <EditorialSection />
            <StatsSection />
            <CallToAction />
        </div>
    );
};

export default Home;
