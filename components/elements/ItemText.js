import ItemContactButton from "./ItemContactButton"

const ItemText = ({ tag, title, description, price, capacityPerson }) => {

    return (
        <>
            <div className="w-full pt-10 lg:w-1/2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 lg:max-w-lg lg:mx-0">
                    <span className="bg-blue-500 rounded-r-full py-1 pl-2 pr-4 text-white text-xs">{tag}</span>
                    <h1 className="text-4xl font-extrabold font-montserrat mt-4 mb-4">{title}</h1>
                    <p className="mb-6">{description}</p>
                    <p className="text-4xl font-extrabold font-montserrat mb-4">{price} ₽</p>
                    <p className="mb-6">Вместимость: {capacityPerson} человек</p>
                    <ItemContactButton />
                </div>
            </div>
        </>
    )
}

export default ItemText