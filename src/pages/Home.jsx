import React from "react";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import QuickFinder from "../components/QuickFinder";
import CategoryGrid from "../components/CategoryGrid";
import PromoCards from "../components/PromoCards";
import ProductCarousel from "../components/ProductCarousel";
import FloatingCTA from "../components/FloatingCTA";
import BottomNav from "../components/BottomNav";

export default function Home(){
  return (
    <div className="text-black min-h-screen bg-black-500 {
        
    }">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-6">
        <HeroCarousel />
        <QuickFinder />
        <CategoryGrid />
        <PromoCards />
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Trending</h2>
            <button className="text-sm text-brand">See All</button>
          </div>
          <ProductCarousel />
        </section>
      </main>

      <FloatingCTA />
      <BottomNav />
    </div>
  );
}
