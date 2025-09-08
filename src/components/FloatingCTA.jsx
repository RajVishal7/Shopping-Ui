import React from "react";

export default function FloatingCTA(){
  return (
    <div className="fixed right-4 bottom-24 md:bottom-8">
      <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-3 floating">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">⚡</div>
        <div>
          <div className="text-xs text-gray-500">Do Order in</div>
          <div className="text-sm font-semibold">01:00:00 And Get Order Today</div>
        </div>
      </div>
    </div>
  );
}
