"use client";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import heroImageUrl from "../../public/stockImages/HeroBannerImage1.png";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Optional decorative lines */}
      <svg
        className="absolute left-0 top-0 h-full w-auto text-blue-100 pointer-events-none"
        width="996"
        height="1117"
        viewBox="0 0 996 1117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M994.492 -30.0756L474.003 732.561L473.819 732.832L473.994 733.109L757.234 1184.27H502.326L326.723 876.953L326.289 876.193L325.854 876.953L150.251 1184.27H-104.652L181.08 733.111L181.249 732.841L181.078 732.573L-92.1119 306.538H164.012L329.576 592.506L329.979 593.203L330.424 592.533L744.648 -30.0756H994.492Z"
          stroke="#0097DC"
        />
      </svg>

      {/* Main container */}
      <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl px-6 lg:px-12 py-16 lg:py-24 gap-12 items-center">
        {/* Left content block */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10 max-w-md mx-auto lg:mx-0">
          {/* Logo */}
          <Image
            src="/logo-vertex.svg"
            alt="Vertex Logo"
            width={120}
            height={32}
            priority
          />

          {/* Text content */}
          <div className="mt-6">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
              Private Offices
              <br />
              That Mean Business
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Vertex Private Offices give you privacy, productivity, and
              prestige all under one roof.
            </p>
          </div>

          {/* Contact form */}
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Right image block */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={heroImageUrl}
            alt="Modern office interior with people working"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
