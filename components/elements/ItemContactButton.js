import { useState } from "react"
import { CgClose } from 'react-icons/Cg';
import { IoIosClose } from 'react-icons/Io';





const ItemContactButton = () => {

    const [showModal, setShowModal] = useState(false)

    const onToggleModal = () => {

        setShowModal((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                document.body.style.overflow = 'hidden'
            }
            return !status
        })
    }

    return (
        <>
            <button
                className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-full mb-6"
                onClick={onToggleModal}
            >
                Заказать
            </button>
            {showModal ? (
                <>
                    <div className="fixed inset-0 m-auto z-50 bg-white lg:w-1/2 lg:h-1/2">
                        <div className="flex justify-between border-b-[1px] p-4 lg:p-6">
                            <p className="text-4xl font-extrabold font-montserrat">Заказать</p>
                            <button
                                className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                                onClick={onToggleModal}
                            >
                                <IoIosClose className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="p-4 lg:p-6">
                            <p>Позвонить: +7991111111</p>
                            <p>WhatsApp: +7991111111</p>
                            <p>Телеграмм: @rentboat</p>
                        </div>
                    </div>
                    <div
                        className="fixed inset-0 z-40 bg-black opacity-50 "
                        onClick={onToggleModal}
                    />

                </>
            ) : null}
        </>
    )
}

export default ItemContactButton