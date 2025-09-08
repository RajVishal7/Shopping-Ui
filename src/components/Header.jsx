// import React from "react";
// import { FiBell, FiShoppingCart, FiMapPin } from "react-icons/fi";
// import SearchBar from "./searchBar";

// export default function Header(){
//   return (
//     <header className="bg-white shadow sticky top-0 z-40 ">
//       <div className="container mx-auto px-4 py-3 flex items-center gap-4">
//         <div className="flex items-center gap-3">
//           <img src="https://tse4.mm.bing.net/th/id/OIP.Nf6O2xxcoYQGUdRM-v39ggHaHa?pid=Api&P=0&h=180" alt="logo" className="w-10 h-10 rounded-full" />
//           <div className="text-sm">
//             <div className="text-xs text-gray-500">Deliver To</div>
//             <div className="font-medium flex items-center gap-1">My Home <FiMapPin /></div>
//           </div>
//         </div>

//         <div className="flex-1 max-w-2xl">
//           <SearchBar />
//         </div>

//         <div className="hidden md:flex items-center gap-4">
//           <FiBell size={20} />
//           <FiShoppingCart size={22} />
//         </div>
//       </div>
//     </header>
//   );
// }




import React from "react";
import { FiBell, FiShoppingCart, FiMapPin, FiMenu } from "react-icons/fi";
import SearchBar from "./searchBar";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row gap-2">
        {/* Top row: Logo + Icons */}
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo + Deliver To */}
          <div className="flex items-center gap-3">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.Nf6O2xxcoYQGUdRM-v39ggHaHa?pid=Api&P=0&h=180"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <div className=" text-sm">
              <div className="text-xs text-gray-500">Deliver To</div>
              <div className="font-medium flex items-center gap-1">
                My Home <FiMapPin />
              </div>
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <FiBell size={20} />
            <FiShoppingCart size={22} />
            <div className="md:hidden">
              <FiMenu size={24} />
            </div>
          </div>
        </div>

        {/* Bottom row: Search Bar */}
        <div className="w-full mt-2 sm:mt-0">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
