
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import Image from 'next/image'

const Index = () => {

    const images = [
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7441.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7663.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7378-1.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7381.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7396.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7399-1.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7392.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7559-355x533-1-721x533.jpg',
        'https://spbkater.ru/wp-content/uploads/2019/11/IMG_7571-355x533-1-719x533.jpg',
    ]

    return (
        <>
            <section className="flex flex-wrap">
                <div className="relative w-full h-96 sm:h-[70vh] lg:w-1/2 lg:h-full">
                    <Swiper
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: '.swiper-pagination',
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        modules={[Pagination, Navigation]}
                        className='mySwiper'
                    >
                        {images.map((image, key) => (
                            <SwiperSlide key={key}>
                                <div className='h-96 sm:h-[70vh] w-full'>
                                    <Image
                                        src={image}
                                        layout='fill'
                                        objectFit='cover'
                                        alt='Rent Boat image'
                                        className="absolute inset-0 object-cover"
                                        placeholder="blurDataURL"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className='swiper-pagination'></div>

                        <div className='swiper-button-prev'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 30 30"
                            >
                                <path
                                    fill="#fff"
                                    d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
                                >
                                </path>
                                <path
                                    fill="#428BF9"
                                    fillRule="evenodd"
                                    d="M17.293 18.293a1 1 0 01-1.414 1.414l-3.293-3.293a2 2 0 010-2.828l3.293-3.293a1 1 0 111.414 1.414L14 15l3.293 3.293z"
                                    clipRule="evenodd"
                                >
                                </path>
                            </svg>
                        </div>

                        <div className='swiper-button-next'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 30 30"
                            >
                                <path
                                    fill="#fff"
                                    d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
                                >
                                </path>
                                <path
                                    fill="#428BF9"
                                    fillRule="evenodd"
                                    d="M12.293 11.707a1 1 0 011.414-1.414L17 13.586a2 2 0 010 2.828l-3.293 3.293a1 1 0 01-1.414-1.414L15.586 15l-3.293-3.293z"
                                    clipRule="evenodd"
                                >
                                </path>
                            </svg>
                        </div>
                    </Swiper>
                </div>

                <div className="w-full pt-10 lg:w-1/2">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-lg lg:mx-0">
                        <span className="bg-blue-500 rounded-r-full py-1 pl-2 pr-4 text-white">Бизнес класс</span>
                        <h1 className="text-4xl font-extrabold font-montserrat mt-4 mb-4">Аренда катера Challenger 230</h1>
                        <p className="mb-6">В вашем распоряжении скоростной, вместительный катер, оборудованный комфортным тентом для любой погоды.</p>
                        <p className="text-4xl font-extrabold font-montserrat mb-4">12 000 ₽</p>
                        <p className="mb-6">Вместимость: 12 человек</p>
                        <button className="bg-black hover:bg-gray-600 text-white py-3 px-8 rounded-full">Заказать</button>
                    </div>
                </div>
            </section>
         
        </>
    )
}

export default Index