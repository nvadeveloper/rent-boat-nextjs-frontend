import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSlider = ({ images }) => {
    return (
        <>
            <style jsx>{`
                * {
                    --swiper-pagination-bullet-size: 14px;
                }
            `}</style>
            <div className="relative w-full h-80 sm:h-[70vh] lg:w-1/2 lg:h-full">
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 4,
                        el: '.swiper-pagination',
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    {images.map((image, key) => (
                        <SwiperSlide key={key}>
                            <div className="h-80 sm:h-[70vh] w-full bg-slate-100">
                                <Image
                                    src={image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Rent Boat Image"
                                    className="absolute inset-0 object-cover"
                                    placeholder="blur"
                                    blurDataURL={image}
                                    quality={75}
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="none"
                            viewBox="0 0 30 30">
                            <path
                                fill="#fff"
                                d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"></path>
                            <path
                                fill="#428BF9"
                                fillRule="evenodd"
                                d="M17.293 18.293a1 1 0 01-1.414 1.414l-3.293-3.293a2 2 0 010-2.828l3.293-3.293a1 1 0 111.414 1.414L14 15l3.293 3.293z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>

                    <div className="swiper-button-next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="none"
                            viewBox="0 0 30 30">
                            <path
                                fill="#fff"
                                d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"></path>
                            <path
                                fill="#428BF9"
                                fillRule="evenodd"
                                d="M12.293 11.707a1 1 0 011.414-1.414L17 13.586a2 2 0 010 2.828l-3.293 3.293a1 1 0 01-1.414-1.414L15.586 15l-3.293-3.293z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default ImageSlider;
