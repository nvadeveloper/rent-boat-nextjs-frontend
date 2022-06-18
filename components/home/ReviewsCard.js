import Image from 'next/image';

const ReviewsCard = ({ imageUrl, name, description }) => {
    return (
        <>
            <li className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                    <Image
                        className="flex-none rounded-full object-cover w-14 h-14"
                        src={imageUrl}
                    />
                    <div className="text-base text-gray-900 font-semibold">{name}</div>
                </div>
                <div className="mt-6 text-gray-600">
                    <p>{description}</p>
                </div>
            </li>
        </>
    );
};

export default ReviewsCard;
