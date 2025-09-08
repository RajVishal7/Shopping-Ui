import React from "react";
import { HiOutlineHome, HiOutlineHeart, HiOutlineUser } from "react-icons/hi";

export default function BottomNav(){
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-white rounded-full px-4 py-2 flex items-center gap-6 floating">
      <button className="flex flex-col items-center text-sm"><HiOutlineHome size={20}/> <span>Home</span></button>
      <button className="flex flex-col items-center text-sm"><HiOutlineHeart size={20}/> <span>Fav</span></button>
      <button className="flex flex-col items-center text-sm"><HiOutlineUser size={20}/> <span>Profile</span></button>
    </nav>
  );
}
