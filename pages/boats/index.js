import PageHeading from '../../components/elements/PageHeading';
import Card from '../../components/elements/card/Card';

const Index = ({ boats }) => {
    // const text = {
    //     name: 'Challenger 230',
    //     tag: 'Бинес класс',
    //     price: '12 000',
    //     person: '12',
    //     href: 'boats/slug',
    // };

    // const images = [
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7441.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7663.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7378-1.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7381.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7396.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7399-1.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7392.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7559-355x533-1-721x533.jpg',
    //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7571-355x533-1-719x533.jpg',
    // ];

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
                                images={boat.images}
                                name={boat.name}
                                price={boat.price}
                                tag={boat.tag}
                                person={boat.person}
                                href={boat.href}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export const getStaticProps =  async () => {
    const res = await fetch('https://62af026a3bbf46a3521a24e5.mockapi.io/boat');
    const boats = await res.json();
    return {
        props: {
            boats,
        },
    };
}

export default Index;
