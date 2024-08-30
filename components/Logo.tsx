import React from "react";
import Image from "next/image";
export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/galsenext.svg" alt="Logo" width={32} height={32} />
      <span className="font-bold text-lg text-gray-800">Galsenext</span>
    </div>
  );
};
