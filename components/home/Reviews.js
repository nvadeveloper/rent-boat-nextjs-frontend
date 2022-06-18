import PageHeading from '../elements/PageHeading';
import ReviewsCard from './ReviewsCard';

const leftСolumn = [
    {
        name: 'Ryan Florence',
        description: 'Lorem ipsum dolor sit amet',
        imageUrl:
            'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg',
    },
    {
        name: 'Ryan Florence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageUrl:
            'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg',
    },
];

const centerСolumn = [
    {
        name: 'Ryan Florence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageUrl:
            'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg',
    },
    {
        name: 'Ryan Florence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageUrl:
            'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg',
    },
];

const rightСolumn = [
    {
        name: 'Ryan Florence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageUrl:
            'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg',
    },
    {
        name: 'Ryan Florence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageUrl:
            'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg',
    },
];

const Reviews = () => {
    return (
        <>
            <PageHeading>
                <p className="mt-10">Отзывы</p>
            </PageHeading>
            <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
                <ul className="space-y-6 lg:space-y-8">
                    {leftСolumn.map((item, key) => (
                        <ReviewsCard
                            name={item.name}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            key={key}
                        />
                    ))}
                </ul>

                <ul className="space-y-6 lg:space-y-8">
                    {centerСolumn.map((item, key) => (
                        <ReviewsCard
                            name={item.name}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            key={key}
                        />
                    ))}
                </ul>

                <ul className="space-y-6 lg:space-y-8">
                    {rightСolumn.map((item, key) => (
                        <ReviewsCard
                            name={item.name}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            key={key}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Reviews;
