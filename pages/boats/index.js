import PageHeading from '../../components/elements/PageHeading';
import Card from '../../components/elements/card/Card';

const Index = () => {
    const text = {
        name: 'Challenger 230',
        tag: 'Бинес класс',
        price: '12 000',
        person: '12',
        href: 'boats/slug',
    };

    const images = [
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7441.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7663.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7378-1.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7381.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7396.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7399-1.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7392.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7559-355x533-1-721x533.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7571-355x533-1-719x533.jpg',
    ];

    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PageHeading>
                    <h1>Катера</h1>
                </PageHeading>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                    <Card
                        images={images}
                        name={text.name}
                        price={text.price}
                        tag={text.tag}
                        person={text.person}
                        href={text.href}
                    />
                </div>
            </section>
        </>
    );
};

export default Index;
