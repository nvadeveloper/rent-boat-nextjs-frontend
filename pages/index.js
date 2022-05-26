import Impression from '../components/indexPage/Impression';
import Navigation from '../components/indexPage/Navigation';
import Tagline from '../components/indexPage/Tagline';

const Index = () => {
    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Tagline />
                <Navigation />
                <Impression />
            </section>
        </>
    );
};

export default Index;
