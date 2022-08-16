import Image from 'next/image';

const ReviewsCard = ({ imageUrl, name, description }) => {
    return (
        <li className="bg-slate-50 rounded-xl p-6 shadow" key={name}>
            <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14">
                    <Image
                        alt="Rent Boat Image"
                        className="rounded-full"
                        layout="fill"
                        objectFit="cover"
                        src={imageUrl}
                        // placeholder="blur"
                        // blurDataURL={imageUrl}
                        quality={50}
                    />
                </div>
                <div className="text-base text-gray-900 font-semibold">{name}</div>
            </div>
            <div className="mt-6 text-gray-600">
                <p>{description}</p>
            </div>
        </li>
    );
};

export default ReviewsCard;
