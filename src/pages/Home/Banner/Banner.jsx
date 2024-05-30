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
        <div className='rounded-xl'>
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
                <div className="w-full lg:h-[calc(100vh-20px)] bg-white ">
                    <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg" alt="" className="w-full lg:h-[calc(100vh-20px)] md:rounded-b-[100px] opacity-80" />
                    <div className='App absolute top-10 left-10 lg:top-60 lg:left-40'>
                        <h1 style={{ paddingTop: '5rem', margin: 'auto 0' }} className='lg:text-8xl text-white font-sofia font-bold'>
                        Unite. Empower. Serve. Together, we uplift communities worldwide.  {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={[]}
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
                <div className="w-full lg:h-[calc(100vh-20px)] relative">
                    <img src="https://images.unsplash.com/photo-1557660559-42497f78035b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZvbHVudGVlcmluZ3xlbnwwfDB8MHx8fDA%3D" alt="" className="w-full lg:h-[calc(100vh-20px)] md:rounded-b-[100px] opacity-80" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full lg:h-[calc(100vh-20px)]">
                    <img src="https://moralparadigm.com/wp-content/uploads/2018/04/Growth-of-humanity.jpg" alt="" className="w-full lg:h-[calc(100vh-20px)] md:rounded-b-[100px] opacity-80" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Banner;