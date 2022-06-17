import Impression from '../components/indexPage/Impression';
import Navigation from '../components/indexPage/Navigation';
import Reviews from '../components/indexPage/Reviews';
import Tagline from '../components/indexPage/Tagline';

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
