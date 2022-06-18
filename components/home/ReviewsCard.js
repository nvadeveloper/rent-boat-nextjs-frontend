const ReviewsCard = ({ imageUrl, name, description }) => {
    return (
        <>
            <li className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                    <img className="flex-none w-14 h-14 rounded-full object-cover" src={imageUrl} />
                    <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold">{name}</div>
                    </div>
                </div>
                <div className="mt-6 text-slate-700">
                    <p>{description}</p>
                </div>
            </li>
        </>
    );
};

export default ReviewsCard;
