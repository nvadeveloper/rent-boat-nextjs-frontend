import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import ItemContactButton from './ContactButton';

const Description = ({ title, description, price, person, tag, id }) => {
    const [favorites, setFavorites] = useState(false);

    useEffect(() => {
        if (localStorage.favoritesBoatsArray) {
            if (localStorage.getItem('favoritesBoatsArray').split(',').includes(id)) {
                setFavorites(true);
            } else {
                setFavorites(false);
            }
        } else {
            setFavorites(false);
        }
    }, [id]);

    return (
        <div className="w-full pt-10 lg:w-1/2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 lg:max-w-lg lg:mx-0">
                <span className="bg-blue-500 rounded-r-full py-1 pl-2 pr-4 text-white text-xs">
                    {tag}
                </span>

                <h1 className="text-4xl font-black mt-4 mb-4">{title}</h1>
                <p className="mb-6">{description}</p>
                <p className="text-4xl font-black mb-4">{price} ₽</p>
                <p className="mb-6">Вместимость: {person} человек</p>
                <div className="flex">
                    <ItemContactButton />
                    <div
                        className={
                            'flex justify-center items-center cursor-pointer px-3 ml-3 rounded-full text-white hover:outline-none hover:ring ' +
                            (favorites
                                ? 'bg-blue-600 hover:bg-blue-500 active:bg-blue-500 hover:ring-blue-300'
                                : 'bg-gray-900 hover:bg-gray-700 active:bg-gray-700 hover:ring-gray-400')
                        }
                        onClick={() => {
                            let Storage = localStorage;

                            if (Storage.favoritesBoatsArray) {
                                let array = Storage.getItem('favoritesBoatsArray').split(',');
                                if (array.includes(id)) {
                                    if (array.indexOf(id) !== -1) {
                                        array.splice(array.indexOf(id), 1);
                                        Storage.setItem('favoritesBoatsArray', array);
                                        setFavorites(false);
                                    }
                                } else {
                                    array.push(id);
                                    Storage.setItem('favoritesBoatsArray', array);
                                    setFavorites(true);
                                    toast('Добавлено в избранное', {
                                        icon: '💙',
                                    });
                                }
                            } else {
                                Storage.setItem('favoritesBoatsArray', id);
                                setFavorites(true);
                                toast('Добавлено в избранное', {
                                    icon: '💙',
                                });
                            }
                        }}>
                        {favorites ? (
                            <FaHeart className="h-6 w-6 text-white" />
                        ) : (
                            <FaRegHeart className="h-6 w-6 text-white" />
                        )}
                    </div>
                    <Toaster position="top-right"  reverseOrder={false}/>
                </div>
            </div>
        </div>
    );
};

export default Description;
