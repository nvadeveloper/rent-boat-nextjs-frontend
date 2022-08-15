import Link from 'next/link';
import ImageSlider from './ImageSlider';
import Description from './Description';

const Card = ({ id, title, price, tag, person, images }) => {
    return (
        <>
            <Link href={`/boats/${id}`}>
                <a>
                    <ImageSlider images={images} />
                    <Description title={title} price={price} tag={tag} person={person} id={id}/>
                </a>
            </Link>
        </>
    );
};

export default Card;
