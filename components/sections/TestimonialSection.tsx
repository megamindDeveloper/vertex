"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const testimonials = [
    {
      id: 1,
      text: "“My experience with the Vertex workspace is 5 stars. Good parking space, professional meeting space, and 5-star staff. Thank you.”",
      name: "Mithun Raj",
      role: "Director · Productions",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 2,
      text: "“Vertex Workspace has transformed how I work — quiet, clean, and full of energy. Highly recommended!”",
      name: "Sneha Kumar",
      role: "Creative Strategist",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 3,
      text: "“Perfect environment for startups. Great amenities and a fantastic support team.”",
      name: "Rahul Menon",
      role: "Co-founder · Pixel Bay",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
  ];

  return (
    <section className="bg-white overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="relative">
        {/* --- SWIPER WRAPPER --- */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Link custom buttons before Swiper initializes
            if (swiper.params.navigation) {
              const nav = swiper.params.navigation as any;
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="max-w-7xl xl:max-w-[65%] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0 gap-10">
                {/* LEFT SIDE - TEXT */}
                <div className="relative z-20 flex flex-col items-start justify-center space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-3xl font-semibold text-primary   max-w-2xl mx-auto lg:mx-0">
                    {testimonial.text}
                  </p>

                  {/* NAVIGATION BUTTONS — OUTSIDE SLIDES, CONTROLLED BELOW */}
                  <div className="flex items-center z-[555555555555555555555] justify-center lg:justify-start gap-4">
                    <button
                      ref={prevRef}
                      className="h-9 w-9 sm:h-10 sm:w-10 transition"
                    >
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3587 0.99995L1.41422 10.9444L11.3587 20.8889"
                          stroke="#D1D1D1"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <button
                      ref={nextRef}
                      className="h-9 w-9 sm:h-10 sm:w-10 transition"
                    >
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999998 20.889L10.9445 10.9445L0.999998 1"
                          stroke="#848484"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* IMAGE (RIGHT SIDE) */}
                <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                  <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] max-w-[900px]">
                    <Image
                      alt={testimonial.name}
                      width={1000}
                      height={1000}
                      src={testimonial.image}
                      className="object-contain w-full h-auto rounded-lg relative z-10"
                    />
                  </div>
                </div>
              </div>

              {/* DARK BAR BELOW */}
              <div className="relative z-0 mt-[-60px] sm:mt-[-80px] pb-5 md:mt-[-150px]">
                <div className="bg-[#12181C] text-white">
                  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 lg:px-0 py-5 sm:py-6 gap-4">
                    {/* LEFT SIDE - NAME & ROLE */}
                    <div className="flex justify-between w-[50%] text-center sm:text-left">
                      <div className="flex flex-col">
                        <h4 className="text-base sm:text-3xl font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-[26px] text-white">{testimonial.role}</p>
                      </div>
                      <Image
                        src={testimonial.logo}
                        alt="Logo"
                        width={110}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
