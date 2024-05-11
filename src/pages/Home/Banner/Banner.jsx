// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter'

import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='my-16 rounded-xl'>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="w-full lg:h-[600px] relative">
                    <img src="https://englishpluspodcast.com/wp-content/uploads/2023/11/Peace-by-Peace_Embracing-Our-Common-Humanity-jpg.webp" alt="" className="w-full lg:h-[600px] " />
                    <div className='App absolute top-10 left-10 lg:top-60 lg:left-40'>
                        <h1 style={{ paddingTop: '5rem', margin: 'auto 0' }} className='lg:text-8xl text-white font-sofia font-bold'>
                            Where Art Meets Craftsmanship in   {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Ceramics', 'and', 'Pottery']}
                                    loop={1}
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full lg:h-[600px]">
                    <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg" alt="" className="w-full lg:h-[600px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full lg:h-[600px]">
                    <img src="https://moralparadigm.com/wp-content/uploads/2018/04/Growth-of-humanity.jpg" alt="" className="w-full lg:h-[600px]" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Banner;