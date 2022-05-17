import { useState } from "react"

const ItemText = ({ tag, title, description, price, capacityPerson }) => {

    const [showModal, setShowModal] = useState(false)

    const onToggleModal = () => {

        // setShowModal((status) => {
        //     if (status) {
        //         document.body.style.overflow = 'auto'
        //     } else {
        //         document.body.style.overflow = 'hidden'
        //     }
        //     return !status
        // })
    }

    return (
        <>
            <div className="w-full pt-10 lg:w-1/2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-lg lg:mx-0">
                    <span className="bg-blue-500 rounded-r-full py-1 pl-2 pr-4 text-white">{tag}</span>
                    <h1 className="text-4xl font-extrabold font-montserrat mt-4 mb-4">{title}</h1>
                    <p className="mb-6">{description}</p>
                    <p className="text-4xl font-extrabold font-montserrat mb-4">{price} ₽</p>
                    <p className="mb-6">Вместимость: {capacityPerson} человек</p>
                    <button
                        className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-full mb-6"
                        onClick={() => onToggleModal(true)}
                        type="button"
                    >
                        Заказать
                    </button>
                    {showModal ? (
                        <>  <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                            <div>
                                <button
                                    className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-full mb-6"
                                    onClick={() => onToggleModal(false)}
                                    type="button"
                                >
                                    Закрыть
                                </button>
                            </div>
                            </div>
                           
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default ItemText