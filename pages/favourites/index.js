import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

import PageHeading from '../../components/elements/PageHeading';

const Favourites = ({ boats }) => {
    const [isFavourites, setIsFavourites] = useState([]);

    useEffect(() => {
        setIsFavourites([]);
        let Storage = localStorage;
        if (Storage.favoritesArray) {
            let array = Storage.getItem('favoritesArray').split(',');
            setIsFavourites(array);
        } else {
            setIsFavourites([]);
        }
    }, [boats]);

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeading>
                <h1>Избранное</h1>
            </PageHeading>
            <div>
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
                                                    <p className="font-black text-xl">
                                                        {boat.title}
                                                    </p>
                                                    <p className="text-sm text-gray-900">
                                                        {boat.price} руб/час
                                                    </p>

                                                    <p className="text-sm text-gray-900">
                                                        {boat.tag}
                                                    </p>
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
                {isFavourites.length ? (
                    <button
                        className="mt-10 px-8 py-3 rounded-full text-white bg-gray-900 hover:bg-gray-700 active:bg-gray-700 hover:outline-none hover:ring hover:ring-gray-400"
                        onClick={() => {
                            localStorage.clear();
                            Router.reload(window.location.pathname);
                        }}>
                        Отчистить избранное
                    </button>
                ) : (
                    <div>
                        <p className='mb-10'>Избранное пусто 🥲🥲🥲</p>
                        <Link href='/'>
                            <a className="px-8 py-3 rounded-full text-white bg-gray-900 hover:bg-gray-700 active:bg-gray-700 hover:outline-none hover:ring hover:ring-gray-400">
                                На главную
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch('https://62af026a3bbf46a3521a24e5.mockapi.io/boats');
    const data = await res.json();
    return {
        props: { boats: data },
    };
};

export default Favourites;
