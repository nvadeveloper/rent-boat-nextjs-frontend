import Image from 'next/image';
import Link from 'next/link';

const FavouritesBoats = ({ boats, isFavourites }) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {boats.map((boat, key) => {
                if (isFavourites.includes(boat.id)) {
                    return (
                        <li key={key}>
                            <Link href={`/boats/${boat.id}`}>
                                <a>
                                    <div className="flex h-full">
                                        <div className="w-44 sm:w-64 h-40 relative bg-slate-100">
                                            <Image
                                                src={boat.images[0]}
                                                layout="fill"
                                                objectFit="cover"
                                                alt="Rent Boat Image"
                                                className="rounded-xl"
                                                quality={1}
                                            />
                                        </div>
                                        <div className="p-6 text-gray-900 text-sm">
                                            <p className="font-black text-black text-xl">
                                                {boat.title}
                                            </p>
                                            <p>{boat.price} руб/час</p>
                                            <p>{boat.tag}</p>
                                            <p>{boat.person} человек</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default FavouritesBoats;
