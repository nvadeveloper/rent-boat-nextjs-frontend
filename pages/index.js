import Impression from '../components/home/Impression';
import Navigation from '../components/home/Navigation';
import Reviews from '../components/home/Reviews';
import Tagline from '../components/home/Tagline';

const Index = () => {
    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Tagline />
                <Navigation />
                <Impression />
                <Reviews />
            </section>
            {/* <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                
            </section> */}
        </>
    );
};

export default Index;
