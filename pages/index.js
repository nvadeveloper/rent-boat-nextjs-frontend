import Gradient from '../components/home/Gradient';
import Impression from '../components/home/Impression';
import Navigation from '../components/home/Navigation';
import Reviews from '../components/home/Reviews';
import Tagline from '../components/home/Tagline';

const Index = () => {
    return (
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Gradient />
                <Tagline />
                <Navigation />
                <Impression />
                <Reviews />
            </section>
    );
};

export default Index;
