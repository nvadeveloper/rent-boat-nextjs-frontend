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
                    <div className="flex">
                        <ItemContactButton />
                        <div
                            className="mb-6 flex items-center ml-3 bg-gray-900 rounded-full p-3 cursor-pointer"
                            onClick={() => setFavorites(!favorites)}>
                            {favorites ? (
                                <FaHeart className="h-6 w-6 text-white" />
                            ) : (
                                <FaRegHeart className="h-6 w-6 text-white" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;
