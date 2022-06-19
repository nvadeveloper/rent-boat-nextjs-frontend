import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const ContactButton = () => {
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
                className="px-8 py-3 rounded-full text-white mb-6 bg-gray-900 hover:bg-gray-700 active:bg-gray-700 hover:outline-none hover:ring hover:ring-gray-400"
                onClick={onToggleModal}>
                Заказать
            </button>

            {showModal ? (
                <>
                    <div className="fixed bg-white z-50 bottom-0 rounded-t-2xl lg:rounded-none right-0 w-full h-3/4 m-auto lg:w-5/12 lg:h-full">
                        <div className="flex justify-between items-center border-b p-6">
                            <p className="text-4xl font-black">Заказать</p>
                            <button
                                className="h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                                onClick={onToggleModal}>
                                <IoIosClose className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="p-6">
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

export default ContactButton;
