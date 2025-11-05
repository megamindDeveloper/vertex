"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { Clock, TrendingUp, HeartHandshake } from "lucide-react";
import privetOffice from "../../public/images/privet-office.webp" // replace with your actual image

export default function PrivateOfficeFeatures() {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
              Designed for Growing Teams
              <br />
              That Thrive in Focus
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-md">
              Our private offices are built for professionals who want a fully
              furnished, lockable office with access to world-class amenities.
            </p>
          </div>

          {/* Space Details */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Space Details:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0097DC] mt-1" />
                <span className="text-gray-700 text-base">
                  24/7 Access, so work at your own pace
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#0097DC] mt-1" />
                <span className="text-gray-700 text-base">
                  Scalable plans that grow with your business
                </span>
              </li>
              <li className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#0097DC] mt-1" />
                <span className="text-gray-700 text-base">
                  On-ground support and community events
                </span>
              </li>
            </ul>
          </div>

          {/* Button */}
          <div className="pt-4">
            <Button className="bg-[#0097DC] hover:bg-[#007bb5] text-white font-semibold px-6 py-2 rounded-md">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={privetOffice}
            alt="Office workspace with team collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
