import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '../../components/elements/PageHeading';

const Favourites = ({ boats }) => {
    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PageHeading>
                    <h1>Избранное</h1>
                </PageHeading>
                <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                        {boats.map((boat, key) => (
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
                        ))}
                    </ul>
                </div>
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

export default Favourites;
