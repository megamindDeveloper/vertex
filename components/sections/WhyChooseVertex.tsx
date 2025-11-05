"use client";

import Image from "next/image";
import { Button } from "../ui/Button";

// Import your actual images
import img1 from "../../public/images/why-choose-vertex/1.webp";
import img2 from "../../public/images/why-choose-vertex/2.webp";
import img3 from "../../public/images/why-choose-vertex/3.webp";
import img4 from "../../public/images/why-choose-vertex/4.webp";

const amenities = [
  {
    id: 1,
    title: "Fully furnished, workspaces ready",
    image: img1,
  },
  {
    id: 2,
    title: "Dedicated private cabins for secure work",
    image: img2,
  },
  {
    id: 3,
    title: "Housekeeping ensures a clean environment",
    image: img3,
  },
  {
    id: 4,
    title: "High-speed internet for seamless connectivity",
    image: img4,
  },
];

export default function WhyChooseVertex() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Why Choose Vertex
            </h2>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">
              At Vertex Workspaces, we understand that some ideas need focus and
              confidentiality.
            </p>
          </div>

          <Button
            variant="outline"
            className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-5 py-2 rounded-md"
          >
            View More Amenities
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Tall Card) */}
          <div className="relative rounded-lg overflow-hidden row-span-2 group">
            <Image
              src={amenities[0].image}
              alt={amenities[0].title}
              className="object-cover w-full h-full min-h-[620px]"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end group-hover:bg-black/50 transition-colors duration-300">
              <p className="text-white font-semibold text-lg sm:text-xl p-4">
                {amenities[0].title}
              </p>
            </div>
          </div>

          {/* Right Columns (2x2 Grid) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {/* Top two images */}
            {amenities.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg overflow-hidden group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-[300px]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                  <p className="text-white font-medium text-lg sm:text-xl p-4">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom full-width image (only takes one row, fills both cols neatly) */}
            <div className="relative col-span-2 rounded-lg overflow-hidden group">
              <Image
                src={amenities[3].image}
                alt={amenities[3].title}
                className="object-cover w-full h-[300px]"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                <p className="text-white font-medium text-lg sm:text-xl p-4">
                  {amenities[3].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
