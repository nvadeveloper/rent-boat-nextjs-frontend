import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

import PageHeading from '../../components/elements/PageHeading';
import FavouritesBoats from '../../components/elements/FavouritesBoats';

const Favourites = ({ boats }) => {
    const [isFavouritesBoats, setIsFavouritesBoats] = useState([]);

    useEffect(() => {
        setIsFavouritesBoats([]);
        let Storage = localStorage;
        if (Storage.favoritesBoatsArray) {
            let array = Storage.getItem('favoritesBoatsArray').split(',');
            setIsFavouritesBoats(array);
        } else {
            setIsFavouritesBoats([]);
        }
    }, [boats]);

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeading>Избранное</PageHeading>
            <div>
                <PageHeading>Катера</PageHeading>
                <FavouritesBoats boats={boats} isFavourites={isFavouritesBoats} />

                {isFavouritesBoats.length ? (
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
                        <p className="mb-10">Избранное пусто 🥲🥲🥲</p>
                        <Link href="/">
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
    // const res2 = await fetch('https://62af026a3bbf46a3521a24e5.mockapi.io/boats');

    const data = await res.json();
    // const data2 = await res2.json();
    // yachts: data2
    return {
        props: { boats: data },
    };
};

export default Favourites;
