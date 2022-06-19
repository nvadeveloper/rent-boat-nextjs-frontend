import Link from 'next/link';
import CardSlider from './CardSlider';
import CardText from './CardText';

const Card = ({ id, title, price, tag, person, images }) => {
    return (
        <>
            <Link href={`/boats/${id}`}>
                <a>
                    <CardSlider images={images} />
                    <CardText title={title} price={price} tag={tag} person={person} />
                </a>
            </Link>
        </>
    );
};

export default Card;
