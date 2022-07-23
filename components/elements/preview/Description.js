import ItemContactButton from './ContactButton';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const Description = ({ title, description, price, person, tag }) => {
    const [favorites, setFavorites] = useState(false);

    return (
        <>
            <div className="w-full pt-10 lg:w-1/2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 lg:max-w-lg lg:mx-0">
                    <span className="bg-blue-500 rounded-r-full py-1 pl-2 pr-4 text-white text-xs">
                        {tag}
                    </span>

                    <h1 className="text-4xl font-black mt-4 mb-4">{title}</h1>
                    <p className="mb-6">{description}</p>
                    <p className="text-4xl font-black mb-4">{price} ₽</p>
                    <p className="mb-6">Вместимость: {person} человек</p>
                    <div className="flex mb-6">
                        <ItemContactButton />
                        <div
                            // className="mb-6 flex items-center ml-3 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 active:bg-blue-700 hover:outline-none hover:ring hover:ring-blue-300"
                            className='cursor-pointer p-4 ml-3 rounded-full text-white bg-gray-900 hover:bg-gray-700 active:bg-gray-700 hover:outline-none hover:ring hover:ring-gray-400'
                            onClick={() => setFavorites(!favorites)}>
                            {favorites ? (
                                <FaHeart className="h-4 w-4 text-white" />
                            ) : (
                                <FaRegHeart className="h-4 w-4 text-white" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;
