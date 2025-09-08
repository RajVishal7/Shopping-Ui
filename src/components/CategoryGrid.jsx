// import React from "react";
// import { categories } from "../data/categories";

// export default function CategoryGrid(){
//   return (
//     <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-4">
//       {categories.map(cat => (
//         <button key={cat.id} className="flex flex-col items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
//           <img src={cat.icon} alt={cat.title} className="w-10 h-10"/>
//           <span className="text-sm">{cat.title}</span>
//         </button>
//       ))}
//     </div>
//   );
// }


import React, { useRef } from "react";
import { categories } from "../data/categories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CategoryGrid() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-4 relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Category Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-16"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex flex-col items-center gap-3 bg-white p-4 rounded-xl shadow-sm flex-shrink-0 min-w-[120px]"
          >
            <img src={cat.icon} alt={cat.title} className="w-16 h-16" />
            <span className="text-sm">{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
