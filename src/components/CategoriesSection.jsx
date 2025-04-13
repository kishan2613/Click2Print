import React, { useRef, useState } from 'react';
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

const CategoriesSection = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-10 relative bg-[#f0fdfa]">
  <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#005f73] px-4 sm:px-12 text-left">
    Categories
  </h2>

  <div className="relative">
    {/* Scroll Left Button */}
    <button
      onClick={() => scroll('left')}
      className="flex absolute left-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-orange-50 text-[#005f73] rounded-full shadow hover:bg-orange-100"
    >
      <ChevronLeft />
    </button>

    {/* Scrollable List */}
    <div
      ref={scrollRef}
      className="flex justify-between gap-3 sm:gap-6 px-6 sm:px-12 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {categories.map((cat, index) => (
        <div
          key={index}
          className="min-w-[150px] sm:min-w-[220px] max-w-[240px] bg-[#005f73] rounded-xl shadow-md overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:bg-[#0a9396]"
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-32 sm:h-40 object-cover"
          />
          <div className="p-3 text-center">
            <h3 className="text-sm sm:text-lg font-semibold text-white">{cat.title}</h3>
          </div>
        </div>
      ))}
    </div>

    {/* Scroll Right Button */}
    <button
      onClick={() => scroll('right')}
      className="flex absolute right-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-orange-50 text-[#005f73] rounded-full shadow hover:bg-orange-100"
    >
      <ChevronRight />
    </button>
  </div>
</section>

  );
};

export default CategoriesSection;
