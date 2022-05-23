
const CardText = ({ name, price, tag, person }) => {

    return (
        <>
            <div className="my-2">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-xl">{name}</p>
                    <p className="text-sm text-gray-900">{price} руб/час</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">{tag}</p>
                    <p className="text-sm text-gray-900">{person} человек</p>
                </div>
            </div>
        </>
    )
}

export default CardText