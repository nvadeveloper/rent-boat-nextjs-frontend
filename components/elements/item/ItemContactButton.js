import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const ItemContactButton = () => {
    const [showModal, setShowModal] = useState(false);

    const onToggleModal = () => {
        setShowModal((status) => {
            if (status) {
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = 'hidden';
            }
            return !status;
        });
    };

    return (
        <>
            <button
                className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-full mb-6"
                onClick={onToggleModal}>
                Заказать
            </button>
            {showModal ? (
                <>
                    <div className="fixed bg-white z-50 bottom-0 right-0 w-full h-3/4 m-auto lg:w-5/12 lg:h-full">
                        <div className="flex justify-between border-b p-4 lg:p-6">
                            <p className="text-4xl font-black">Заказать</p>
                            <button
                                className="h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                                onClick={onToggleModal}>
                                <IoIosClose className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="p-4 lg:p-6">
                            <p>Вы можете сязаться с нами через:</p>
                            <p>
                                Телефон:{' '}
                                <a
                                    href="tel:+79911142131"
                                    className="text-blue-600 hover:text-blue-500">
                                    +79911142131
                                </a>
                            </p>
                            <p>
                                WhatsApp:{' '}
                                <a
                                    href="https://wa.me/79911142131"
                                    className="text-blue-600 hover:text-blue-500">
                                    +79911142131
                                </a>
                            </p>
                            <p>
                                Телеграм:{' '}
                                <a
                                    href="https://t.me/nikitaav27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-500">
                                    @nikitaav27
                                </a>
                            </p>
                        </div>
                    </div>
                    <div
                        className="fixed inset-0 z-40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-gray-600"
                        onClick={onToggleModal}
                    />
                </>
            ) : null}
        </>
    );
};

export default ItemContactButton;
