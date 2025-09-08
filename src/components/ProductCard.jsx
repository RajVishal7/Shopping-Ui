// import React from "react";

// export default function ProductCard({ id, title, price, image }){
//   return (
//     <div className="w-44 bg-white rounded-lg shadow p-3 flex-shrink-0">
//       <img src={image} alt={title} className="h-28 w-full object-cover rounded" loading="lazy"/>
//       <h4 className="mt-2 text-sm font-medium">{title}</h4>
//       <div className="flex items-center justify-between mt-2">
//         <div className="text-sm font-semibold">₹{price}</div>
//         <button className="px-2 py-1 text-xs bg-brand text-white rounded">Add</button>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function ProductCard({ name, image, price }) {
  return (
    <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md p-4 hover:scale-105 transform transition duration-300">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-lg mb-2" />
      <h3 className="text-md font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">₹{price}</p>
    </div>
  );
}
