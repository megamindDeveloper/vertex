"use client";

import Image from "next/image";

export default function TestimonialSimple() {
  return (
    <section className="bg-white overflow-hidden  py-16 lg:py-24">
    
      <div className="max-w-xl ml-36 px-6 flex flex-col items-start justify-center space-y-10">
        {/* Quote */}
        <p className="text-[20px] md:text-[24px] leading-relaxed text-gray-800 max-w-3xl">
          “My experience with the Vertex workspace is 5 stars. Good parking
          space, professional meeting space, and 5-star staff. Thank you”
        </p>

        {/* Navigation icons */}
        <div className="flex items-center gap-4">
          <button className="h-7 w-7 rounded-full border border-gray-300 text-gray-500 grid place-items-center hover:bg-gray-100">
            {/* Left chevron */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15L7 10L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="h-7 w-7 rounded-full border border-gray-300 text-gray-500 grid place-items-center hover:bg-gray-100">
            {/* Right chevron */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5L13 10L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
        <div className="absolute items-center right-0  bottom-0">
        <Image alt="" width={500} height={500} src="/images/why-choose-vertex/1.webp"/>
        </div>
    </div>
      </div>

      {/* Bottom dark bar */}
      <div className="bg-[#12181C] text-white mt-12">
        <div className="max-w-xl ml-36 flex flex-col sm:flex-row items-center justify-between px-6 py-6 gap-4">
          {/* Name + Role */}
          <div className="text-left">
            <h4 className="text-lg font-semibold">Mithun Raj</h4>
            <p className="text-sm text-gray-300">Director - Productions</p>
          </div>

          {/* Divider + Logo */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block h-6 w-[2px] bg-white/30" />
            <Image
              src="/Icons/vertexlogo.svg"
              alt="Exito Logo"
              width={90}
              height={24}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

