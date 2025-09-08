// import React from "react";
// import products from "../data/product";   // ✅ make sure product.js has "export default"
// import ProductCard from "./ProductCard";

// export default function ProductCarousel() {
//   return (
//     <div className="overflow-x-auto py-4">
//       <div className="flex gap-4">
//         {products.map((p) => (
//           <ProductCard key={p.id} {...p} />
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import products from "../data/product";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  return (
    <div className="overflow-x-auto py-4 scrollbar-hide">
      <div className="flex gap-4 px-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
