import Slider from '../../components/elements/preview/Slider';
import Description from '../../components/elements/preview/Description';

const Index = () => {
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

    const text = {
        tag: 'Бизнес класс',
        title: 'Аренда катера Challenger 230',
        description:
            'В вашем распоряжении скоростной, вместительный катер, оборудованный комфортным тентом для любой погоды.',
        price: '12 000',
        capacityPerson: '12',
    };

    return (
        <>
            <section>
                <div className="flex flex-wrap">
                    <Slider images={images} />
                    <Description
                        tag={text.tag}
                        title={text.title}
                        description={text.description}
                        price={text.price}
                        capacityPerson={text.capacityPerson}
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

export default Index;
