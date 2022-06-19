import Link from "next/link";
import CardSlider from "./CardSlider";
import CardText from "./CardText";

const Card = ({ images, name, price, tag, person, href }) => {
    return (
        <>
            <Link href={'/' + href}>
                <a>
                    <CardSlider images={images} />
                    <CardText name={name} price={price} tag={tag} person={person} />
                </a>
            </Link>
        </>
    );
};

export default Card;
