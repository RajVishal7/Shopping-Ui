// import React from "react";

// export default function PromoCards(){
//   return (
//     <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div className="bg-gradient-to-r from-orange-400 to-orange-200 rounded-lg p-4 flex items-center gap-4">
//         <div className="flex-1">
//           <h3 className="font-bold text-lg">Get Your Order in 21 Minutes</h3>
//           <p className="text-sm">Same day fast delivery</p>
//           <button className="mt-3 px-3 py-1 bg-white rounded-full text-sm">Explore All</button>
//         </div>
//         <img className="w-32 h-32 object-contain" src="https://source.unsplash.com/200x200?delivery" alt="delivery"/>
//       </div>

//       <div className="bg-green-50 rounded-lg p-4 flex items-center gap-4">
//         <div className="flex-1">
//           <h3 className="font-bold text-lg">Get Your Order Today</h3>
//           <p className="text-sm">Same day fast delivery</p>
//           <button className="mt-3 px-3 py-1 bg-black text-white rounded-full text-sm">Explore All</button>
//         </div>
//         <img className="w-28 h-28 object-cover" src="https://source.unsplash.com/200x200?scooter" alt="scooter"/>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";

// export default function PromoCards() {
//   return (
//     <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

//       {/* First card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="bg-gradient-to-r from-orange-400 to-orange-200 rounded-lg p-4 flex items-center gap-4"
//       >
//          <motion.img
//           src="/scooter.jpg"   // ✅ just use "/filename"
//           alt="delivery"
//           className="w-32 h-32 object-contain "
//           whileHover={{ scale: 1.1, rotate: 5 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         />
//         <div className="flex-1">
//           <h3 className="font-bold text-lg">Get Your Order in 21 Minutes</h3>
//           <p className="text-sm">Same day fast delivery</p>
//           <button className="mt-3 px-3 py-1 bg-white rounded-full text-sm">
//             Explore All
//           </button>
//         </div>

//       </motion.div>

//       {/* Second card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="bg-green-50 rounded-lg p-4 flex items-center gap-4"
//       >
//         <div className="flex-1">
//           <h3 className="font-bold text-lg">Get Your Order Today</h3>
//           <p className="text-sm">Same day fast delivery</p>
//           <button className="mt-3 px-3 py-1 bg-black text-white rounded-full text-sm">
//             Explore All
//           </button>
//         </div>
//         <motion.img
//           src="fastdelivery.jpg"   // ✅ no import, just path
//           alt="scooter"
//           className="w-28 h-28 object-cover "
//           whileHover={{ scale: 1.1, rotate: -5 }}
//           transition={{ type: "spring", 
//           stiffness: 200 }}
//         />



//       </motion.div>
//     </div>
//   );
// }





// import React from "react";
// import { motion } from "framer-motion";

// export default function PromoCards() {
//   return (
//     <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">

//       {/* First card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="bg-gradient-to-r from-orange-400 to-orange-200 rounded-lg p-6 flex items-center justify-between"
//       >
//         <motion.img
//           src="/scooter.jpg"   // image inside public folder
//           alt="delivery"
//           className="w-36 h-36 object-contain flex-shrink-0"
//           whileHover={{ scale: 1.1, rotate: 5 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         />
//         <div className="flex-1 ml-4">
//           <h3 className="font-bold text-lg">Get Your Order in 21 Minutes</h3>
//           <p className="text-sm text-gray-800">Same day fast delivery</p>
//           <button className="mt-3 px-4 py-2 bg-white rounded-full text-sm font-medium shadow">
//             Explore All
//           </button>
//         </div>
//       </motion.div>

//       {/* Second card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="bg-green-50 rounded-lg p-6 flex items-center justify-between"
//       >
//         <div className="flex-1 mr-4">
//           <h3 className="font-bold text-lg">Get Your Order Today</h3>
//           <p className="text-sm text-gray-700">Same day fast delivery</p>
//           <button className="mt-3 px-4 py-2 bg-black text-white rounded-full text-sm font-medium shadow">
//             Explore All
//           </button>
//         </div>
//         <motion.img
//           src="/fastdelivery.jpg "   // image inside public folder
//           alt="fast delivery"
//           className="w-36 h-50 object-contain flex-shrink-0"
//           whileHover={{ scale: 1.1, rotate: -5 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         />
//       </motion.div>
//     </div>
//   );
// }






import React from "react";
import { motion } from "framer-motion";

export default function PromoCards() {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* First card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-orange-400 to-orange-200 rounded-lg overflow-hidden"
            >
                <div className="flex flex-row">
                    <motion.img
                        src="/scooter.jpg"
                        alt="delivery"
                        className="w-full h-[320px] object-cover"   // 👈 full width image
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg">Get Your Order in 21 Minutes</h3>
                        <p className="text-sm text-gray-800">Same day fast delivery</p>
                        <button className="mt-3 px-4 py-2 bg-white rounded-full text-sm font-medium shadow">
                            Explore All
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Second card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-green-50 rounded-lg overflow-hidden"

            >  
                 <div className="flex flex-row">
                    <motion.img
                        src="/fastdelivery.jpg"
                        alt="fast delivery"
                        className="w-full h-[320px] object-cover"   // 👈 full width image
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg">Get Your Order Today</h3>
                        <p className="text-sm text-gray-700">Same day fast delivery</p>
                        <button className="mt-3 px-4 py-2 bg-black text-white rounded-full text-sm font-medium shadow">
                            Explore All
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
