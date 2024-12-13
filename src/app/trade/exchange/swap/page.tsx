"use client";
import Button from "@/components/button";
import React, { useState, useEffect } from "react";
import { FiClock, FiInfo } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const SwapPage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedTradeType, setSelectedTradeType] = useState("Exchange");
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const [inputToken, setInputToken] = useState("Binance");
  const [outputToken, setOutputToken] = useState("SWTH");
  const [isInputDropdownOpen, setIsInputDropdownOpen] = useState(false);
  const [isOutputDropdownOpen, setIsOutputDropdownOpen] = useState(false);

  const tokens = ["Binance", "Ethereum", "Bitcoin", "SWTH"];

  useEffect(() => {
    if (pathname.includes("swap")) {
      setSelectedTradeType("Exchange");
    } else if (pathname.includes("liquidity")) {
      setSelectedTradeType("Liquidity");
    } else if (pathname.includes("bridge")) {
      setSelectedTradeType("Bridge");
    }
  }, [pathname]);

  const handleTradeTypeChange = (type: string) => {
    setSelectedTradeType(type);
    if (type === "Swap") {
      router.push("/trade/exchange/swap");
    } else if (type === "Liquidity") {
      router.push("/trade/exchange/liquidity");
    } else if (type === "Bridge") {
      router.push("/trade/exchange/bridge");
    }
  };

  const toggleInputDropdown = () => {
    setIsInputDropdownOpen(!isInputDropdownOpen);
  };

  const toggleOutputDropdown = () => {
    setIsOutputDropdownOpen(!isOutputDropdownOpen);
  };

  const selectInputToken = (token: string) => {
    setInputToken(token);
    setIsInputDropdownOpen(false);
  };

  const selectOutputToken = (token: string) => {
    setOutputToken(token);
    setIsOutputDropdownOpen(false);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-green-900 via-black to-green-900 flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-8 max-w-7xl w-full px-8 text-white">
        {/* Left Panel */}
        <div className="col-span-3 space-y-8">
          <div className="bg-black/50 rounded-md p-8">
            <h2 className="text-lg font-semibold">Trade</h2>
            <p className="text-sm text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              porttitor est.
            </p>
            <ul className="mt-6 space-y-6">
              {["Exchange", "Liquidity", "LP Migration", "V1 Liquidity (old)"].map((item, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left p-3 rounded-md ${selectedTradeType === item
                        ? "bg-gray-800 font-bold"
                        : "hover:bg-gray-800"
                      }`}
                    onClick={() => handleTradeTypeChange(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Panel (Exchange Page) */}
        <div className="col-span-5">
          <div className="rounded-md p-8 space-y-8 bg-gradient-to-r from-black to-green-900">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Exchange</h2>
              <div className="flex space-x-4">
                <FiInfo className="text-xl cursor-pointer" />
                <FiClock className="text-xl cursor-pointer" />
              </div>
            </div>
            <p className="text-sm mt-2">Trade tokens in an instant</p>

            {/* Input Section */}
            <div className="bg-stone-950 rounded-lg p-4 flex justify-between items-center">
              <div className="space-y-8">
                <label className="block text-sm text-gray-400">Input</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="bg-transparent text-white text-lg outline-none mt-1 w-full"
                  placeholder="0.00"
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-sm"
                  onClick={toggleInputDropdown}
                >
                  {inputToken}
                  {isInputDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {isInputDropdownOpen && (
                  <div className="absolute bg-stone-900 w-full rounded-xl mt-2 py-2 shadow-lg z-10">
                    {tokens.map((token) => (
                      <button
                        key={token}
                        onClick={() => selectInputToken(token)}
                        className="w-full text-left px-4 py-2 hover:bg-black/40 rounded-sm"
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center my-4">
              <div className="cursor-pointer">
                <span className="text-white text-xl">⇅</span>
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-stone-950 rounded-lg p-4 flex justify-between items-center">
              <div className="space-y-8">
                <label className="block text-sm text-gray-400">Output (estimated)</label>
                <input
                  type="text"
                  value={outputValue}
                  readOnly
                  className="bg-transparent text-white text-lg outline-none mt-1 w-full"
                  placeholder="0.00"
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-sm"
                  onClick={toggleOutputDropdown}
                >
                  {outputToken}
                  {isOutputDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {isOutputDropdownOpen && (
                  <div className="absolute bg-stone-900 w-full rounded-xl mt-2 py-2 shadow-lg z-10">
                    {tokens.map((token) => (
                      <button
                        key={token}
                        onClick={() => selectOutputToken(token)}
                        className="w-full text-left px-4 py-2 hover:bg-black/40 rounded-sm"
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button buttonText="Unlock Wallet" className="bg-green-600 w-full mt-4" />

            <p className="text-sm text-gray-400 text-center mt-2">
              Slippage Tolerance 0.1%
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-3 space-y-8">
          <div className="bg-black/50 rounded-md p-8">
            <h2 className="text-lg font-semibold">Select your Trade type</h2>
            <p className="text-sm text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-6 space-y-4">
              {["Swap", "Liquidity", "Bridge"].map((type) => (
                <label
                  key={type}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{type}</span>
                  <input
                    type="radio"
                    name="tradeType"
                    value={type}
                    checked={selectedTradeType === "Exchange" && type === "Swap"}
                    onChange={() => handleTradeTypeChange(type)}
                    className="w-4 h-4 bg-transparent border-2 border-gray-500 rounded-full checked:bg-green-500"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="bg-black/50 rounded-md p-8">
            <h2 className="text-lg font-semibold">What is Exchange?</h2>
            <p className="text-sm text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              porttitor est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
