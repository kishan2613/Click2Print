import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import FlexBanner from "../assets/Home/flex-banner.jpg";
import WeddingCard from "../assets/Home/wedding-card.jpg";
import VisitingCard from "../assets/Home/visiting-card.jpg";
import CustomTshirt from "../assets/Home/custom-tshirt.png";
import CoffeeMug from "../assets/Home/coffee-mug.jpg";
import NotesPrinting from "../assets/Home/notes-printing.jpg";
import Standee from "../assets/Home/standee.jpg";
import Sticker from "../assets/Home/sticker.jpg";
import IdCard from "../assets/Home/id-card.jpg";


const categories = [
  { title: 'Flex Banners', image: FlexBanner },
  { title: 'Wedding Cards', image: WeddingCard },
  { title: 'Visiting Cards', image: VisitingCard },
  { title: 'Custom T-Shirts', image: CustomTshirt },
  { title: 'Coffee Mugs', image: CoffeeMug },
  { title: 'Notes Printing', image: NotesPrinting },
  { title: 'Standees', image: Standee },
  { title: 'Stickers', image: Sticker },
  { title: 'ID Cards', image: IdCard },
];

const Trending = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({ left: direction === 'left' ? -250 : 250, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10">
      <h2 className="text-xl sm:text-3xl font-bold mb-6 text-orange-600 px-4 sm:px-12 text-left">
        Trending
      </h2>

      <div className="relative">
        {/* Scroll Buttons (hidden on mobile) */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-orange-100"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex justify-between gap-4 sm:gap-8 px-4 sm:px-12 overflow-hidden  no-scrollbar scroll-smooth"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] sm:min-w-[140px] flex-shrink-0"
            >
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md bg-orange-100 hover:scale-105 transition-transform duration-300">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 sm:mt-3 text-center px-1">
                <p className="text-xs sm:text-base font-medium text-orange-700">{cat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Button (hidden on mobile) */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-orange-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Trending;
