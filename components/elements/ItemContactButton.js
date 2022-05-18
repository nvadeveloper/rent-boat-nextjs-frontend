import { useState } from "react"

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
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="bg-white w-96 h-96">
                            <button
                                className="bg-black hover:bg-gray-600 p-2 text-white rounded-full"
                                onClick={onToggleModal}
                                type="button"
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M13.243 4.757a.857.857 0 00-1.213 0L9 7.787l-3.03-3.03A.857.857 0 104.757 5.97L7.787 9l-3.03 3.03a.857.857 0 001.213 1.213L9 10.213l3.03 3.03a.857.857 0 101.213-1.213L10.213 9l3.03-3.03a.857.857 0 000-1.213z"
                                            clipRule="evenodd"
                                        >
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="opacity-50 fixed inset-0 z-40 bg-black" />
                </>
            ) : null}
        </>
    )
}

export default ItemContactButton