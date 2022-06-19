import PageHeading from '../../components/elements/PageHeading';
import Card from '../../components/elements/card/Card';

const Index = ({ boats }) => {
    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PageHeading>
                    <h1>Катера</h1>
                </PageHeading>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {boats.map((boat, key) => (
                        <li key={key}>
                            <Card
                                id={boat.id}
                                title={boat.title}
                                price={boat.price}
                                tag={boat.tag}
                                person={boat.person}
                                images={boat.images}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export const getStaticProps = async () => {
    const res = await fetch('https://62af026a3bbf46a3521a24e5.mockapi.io/boats');
    const data = await res.json();
    return {
        props: { boats: data },
    };
};

export default Index;
