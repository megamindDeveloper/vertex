"use client";

import Image from "next/image";
import { Button } from "../ui/Button"; // adjust import path based on your project
import officeImg from "../../public/images/testimonials/1.png"; // replace with your actual image path

export default function PrivateOffices() {
  const offices = [
    {
      title: "Vertex One",
      address:
        "Gateway Building, MG Rd, Ballalbagh, Mangaluru, Karnataka 575003",
      image: officeImg,
    },
    {
      title: "Vertex Treo",
      address:
        "Kambala Road, Mallikatte, Kadri, Mangaluru, Karnataka 575003",
      image: officeImg,
    },
    {
      title: "Vertex Five",
      address:
        "Mallikatte Rd, Mallikatte, Kadri, Mangaluru, Karnataka 575003",
      image: officeImg,
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl text-start font-semibold text-gray-900">
          Our Private Offices
        </h2>
        <p className="text-gray-600  text-start mt-2">
          Empower your business with an office space in the most sought after
          locations across the city.
        </p>

        {/* Map */}
        <div className="mt-8 mb-12 w-full h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/offices/map.png" // replace with your map image path
            alt="Office Locations Map"
            width={1200}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full h-52">
                <Image
                  src={office.image}
                  alt={office.title}
                  fill
                  className="object-cover"
                />
                {/* Corner Badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-gray-800 font-semibold text-sm w-7 h-7 flex items-center justify-center rounded-full border border-gray-300">
                  A
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {office.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {office.address}
                </p>
                <div className="mt-4">
                  <Button variant="primary" size="default">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
