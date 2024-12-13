"use client";
import Button from "@/components/button";
import LiquidityGraph from "@/components/graph";
import React, { useState } from "react";
import { FiClock, FiInfo, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const LiquidityPage: React.FC = () => {
  const [selectedTradeType, setSelectedTradeType] = useState("Liquidity");
  const router = useRouter();

  const handleTradeTypeChange = (type: string) => {
    setSelectedTradeType(type);
    if (type === "Swap") {
      router.push("/trade/exchange/swap");
    } else if (type === "Liquidity") {
      router.push("/trade/exchange/liquidity");
    } else if (type === "Bridge") {
      router.push("/trade/exchange/bridge");
    } else if (type === "Exchange") {
      router.push("/trade/exchange/swap");
    }
  };

  return (
    <div className="min-h-[78vh] bg-gradient-to-r from-green-900 via-black to-green-900 flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-8 max-w-7xl w-full px-8 md:px-16 text-white">
        {/* Left Panel */}
        <div className="col-span-1 md:col-span-3 space-y-8">
          <div className="bg-black/50 rounded-md p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold">Trade</h2>
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
                      onClick={() => handleTradeTypeChange(item)} // Call handler
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Center Panel */}
        <div className="col-span-1 md:col-span-5 space-y-8">
          <div className="bg-black/50 rounded-md p-6 md:p-8 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold">Liquidity</h2>
              <div className="flex space-x-4">
                <FiInfo className="text-xl cursor-pointer" />
                <FiClock className="text-xl cursor-pointer" />
              </div>
            </div>
            <p className="text-sm mt-2">Add liquidity to receive LP tokens</p>
            <Button buttonText="Add Liquidity" className="bg-green-600 px-6 md:px-10 py-2" />
            <div className="mt-8">
              <div className="flex justify-between items-center space-y-4 mb-4">
                <p className="text-sm">Your Liquidity</p>
                <p className="text-2xl font-bold">$164,785.12</p>
              </div>
              <LiquidityGraph />
              <p className="text-sm mt-8">
                Don&apos;t see a pool you joined?{" "}
                <a href="#" className="text-green-400 hover:underline">
                  Import it.
                </a>
              </p>
              <p className="text-sm mt-6">
                Or, if you staked your LP tokens in a farm, unstake them to see
                them here.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-1 md:col-span-3 space-y-8">
          <div className="bg-black/50 rounded-md p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold">Select your Trade type</h2>
            <p className="text-sm text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-6 space-y-4">
              {["Swap", "Liquidity", "Bridge"].map((type) => (
                <label
                  key={type}
                  className="flex items-center justify-between text-sm w-full"
                >
                  <span>{type}</span>
                  <input
                    type="radio"
                    name="tradeType"
                    value={type}
                    checked={selectedTradeType === type}
                    onChange={() => handleTradeTypeChange(type)} // Use handler for radio change
                    className="w-4 h-4 bg-transparent border-2 border-gray-500 rounded-full checked:bg-green-500"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="bg-black/50 rounded-md p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold">What is Liquidity?</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPage;