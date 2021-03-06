const Description = ({ title, price, tag, person }) => {
    return (
        <>
            <div className="my-2">
                <div className="flex justify-between items-center">
                    <p className="font-black text-xl">{title}</p>
                    <p className="text-sm text-gray-900">{price} руб/час</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{tag}</p>
                    <p className="text-sm text-gray-900">{person} человек</p>
                </div>
            </div>
        </>
    );
};

export default Description;
