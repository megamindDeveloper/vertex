"use client";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import heroImageUrl from "../../public/stockImages/HeroBannerImage1.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative diagonal lines (optional, subtle accent) */}
      <svg className="absolute left-0 top-0 h-full w-auto text-blue-100 pointer-events-none" width="996" height="1117" viewBox="0 0 996 1117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M994.492 -30.0756L474.003 732.561L473.819 732.832L473.994 733.109L757.234 1184.27H502.326L326.723 876.953L326.289 876.193L325.854 876.953L150.251 1184.27H-104.652L181.08 733.111L181.249 732.841L181.078 732.573L-92.1119 306.538H164.012L329.576 592.506L329.979 593.203L330.424 592.533L744.648 -30.0756H994.492Z"
          stroke="#0097DC"
        />
      </svg>

      <div className="container  relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 xl:col-span- bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-100">
          <div className="space-y-6">
            {/* Logo */}
            <Image src="/logo-vertex.svg" alt="Vertex Logo" width={120} height={32} priority />

            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
                Private Offices
                <br />
                That Mean Business
              </h1>
              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Vertex Private Offices give you privacy, productivity, and prestige all under one roof.
              </p>
            </div>

            {/* Contact Form */}
            <div className="pt-4">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 xl:col-span-10">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-ful rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={heroImageUrl}
              alt="Modern office interior with people working"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
