// import React from "react";
// import Home from "./pages/Home";

// export default function App(){
//   return <Home />;
// }



import React from "react";
import Header from '../src/components/Header'
import HeroCarousel from "./components/HeroCarousel";
import CategoryGrid from "./components/CategoryGrid";
import PromoCards from "./components/PromoCards";
import ProductCarousel from "./components/ProductCarousel";
import FloatingCTA from "./components/FloatingCTA";
import BottomNav from "../src/components/BottomNav";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-6">
        {/* Hero Section */}
        <HeroCarousel />

       

        {/* Promo Cards */}
        <PromoCards />

         {/* Category Grid */}
        <CategoryGrid />

        {/* Trending Products */}
        <section className="mt-6 bgyellow-500">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-amber-50">Trending</h2>
            <button className="text-sm text-yellow-500">See All</button>
          </div>
          <ProductCarousel />
        </section>
      </main>

      {/* Floating Countdown CTA */}
      <FloatingCTA />

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
