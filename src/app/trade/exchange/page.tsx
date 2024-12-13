"use client";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation"; // Import useRouter hook

const Trade: React.FC = () => {
  const [selectedTradeType, setSelectedTradeType] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleTradeTypeSelect = (item: string) => {
    setSelectedTradeType(item);
    if (item === "Liquidity") {
      router.push("/trade/exchange/liquidity"); 
    }
    else if (item === "Exchange") {
      router.push("/trade/exchange/swap"); 
    }
  };

  return (
    <div className="min-h-[87vh] bg-gradient-to-r from-green-900 via-black to-green-900 p-16">
        <div className="w-full bg-black/50 rounded-md p-8">
          <h2 className="text-lg font-semibold">Trade</h2>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            porttitor est.
          </p>
          <a
            href="#"
            className="text-sm flex items-center gap-2 mt-4 hover:underline"
          >
            Learn More <FiArrowRight />
          </a>
          <ul className="mt-6 space-y-6">
            {["Exchange", "Liquidity", "LP Migration", "V1 Liquidity (old)"].map(
              (item, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left p-3 rounded-md ${selectedTradeType === item
                        ? "bg-gray-800 font-bold"
                        : "hover:bg-gray-800"
                      }`}
                    onClick={() => handleTradeTypeSelect(item)}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
    </div>
  );
};

export default Trade;