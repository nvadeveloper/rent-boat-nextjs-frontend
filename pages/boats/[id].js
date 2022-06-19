import ImageSlider from '../../components/elements/preview/ImageSlider';
import Description from '../../components/elements/preview/Description';

const Index = ({ boat }) => {
    return (
        <>
            <section>
                <div className="flex flex-wrap">
                    <ImageSlider images={boat.images} />
                    <Description
                        title={boat.title}
                        tag={boat.tag}
                        description={boat.description}
                        price={boat.price}
                        person={boat.person}
                    />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-4xl font-extrabold font-montserrat py-6 sm:pt-12 sm:pb-10">
                        Описание
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
        </>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch('https://62af026a3bbf46a3521a24e5.mockapi.io/boats');
    const data = await res.json();

    const paths = data.map((boat) => {
        return {
            params: { id: boat.id.toString() },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://62af026a3bbf46a3521a24e5.mockapi.io/boats/' + id);
    const data = await res.json();

    return {
        props: { boat: data },
    };
};

export default Index;
