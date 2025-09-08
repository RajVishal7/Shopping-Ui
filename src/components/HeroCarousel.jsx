import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";  

const slides = [
    { id: 1, title: "Get 20% OFF", subtitle: "Hot Deal 🔥", image: "https://static.vecteezy.com/system/resources/previews/023/460/354/large_2x/happy-birthday-background-with-balloons-illustration-ai-generative-free-photo.jpg" },
    { id: 2, title: "Birthday Get Specials", subtitle: "Celebrate", image: "https://wallpaperaccess.com/full/244024.jpg" },
    { id: 3, title: "Birthday Specials", subtitle: "Celebrate", image: "https://wallpaperaccess.com/full/1118170.jpg"},
];

export default function HeroCarousel() {
    return (
        <div className="my-4 rounded-full">
            <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} loop>
                {slides.map(s => (
                    <SwiperSlide key={s.id}>
                        <div className="relative rounded-4xl overflow-hidden">
                            {/* <img src={s.image} alt={s.title} className="w-full h-36 md:h-72 object-cover" /> */}
                            <img
                                src={s.image}
                                alt={s.title}
                                className="w-full h-[400px] md:h-[400px] object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute left-6 top-6 md:left-12 md:top-12 text-white">
                                <div className="text-md font-bold">{s.subtitle}</div>
                                <h3 className="text-2xl md:text-4xl font-bold">{s.title}</h3>
                                <button className="mt-3 px-4 py-2 bg-brand text-white bg-yellow-500 rounded-full">Order Now</button>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
