import Image from 'next/image';

const imageUrl = 'https://lukcode.com/static/images/apla.png';

const Gradient = () => {
    return (
        <>
            <div className="absolute top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none w-full h-52 sm:h-full">
                <Image
                    src={imageUrl}
                    alt="gradient"
                    layout="fill"
                    quality={1}
                    priority
                />
            </div>
        </>
    );
};

export default Gradient;
