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
                                        <div className="w-40 sm:w-64 h-40 relative bg-slate-100">
                                            <Image
                                                src={boat.images[0]}
                                                layout="fill"
                                                objectFit="cover"
                                                alt="Rent Boat Image"
                                                className="rounded-xl"
                                                quality={1}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <p className="font-black text-xl">{boat.title}</p>
                                            <p className="text-sm text-gray-900">
                                                {boat.price} руб/час
                                            </p>

                                            <p className="text-sm text-gray-900">{boat.tag}</p>
                                            <p className="text-sm text-gray-900">
                                                {boat.person} человек
                                            </p>
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
