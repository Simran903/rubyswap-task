"use client";

import React, { useState } from "react";
import { FiClock, FiInfo } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Button from "@/components/button";

const ExchangePage: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const [inputToken, setInputToken] = useState("Binance");
  const [outputToken, setOutputToken] = useState("SWTH");

  const tokens = ["Binance", "Ethereum", "Bitcoin", "SWTH"];

  return (
    <div className="bg-gradient-to-r from-[#141914] via-[#013220] to-[#013220] min-h-screen px-32 py-16 flex justify-center items-center">
      <div className="bg-zinc-950 opacity-80 rounded-lg p-10 space-y-6 w-full max-w-md text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Exchange</h2>
          <div className="flex space-x-4">
            <FiInfo className="text-xl font-semibold cursor-pointer" />
            <FiClock className="text-xl font-semibold cursor-pointer" />
          </div>
        </div>
        <p className="text-sm text-gray-400">Trade tokens in an instant</p>

        {/* Input Section */}
        <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <label className="block text-sm text-gray-400">Input</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
              className="bg-transparent text-white text-lg outline-none mt-1 w-full"
              placeholder="0.00"
            />
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-sm"
              onClick={() => console.log("Select Token")}
            >
              {inputToken}
              <FaChevronDown />
            </button>
            <div className="absolute bg-gray-800 w-full rounded-lg mt-2 shadow-lg hidden">
              {tokens.map((token) => (
                <button
                  key={token}
                  onClick={() => setInputToken(token)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center my-4">
          <div className="bg-green-500 p-2 rounded-full cursor-pointer">
            <span className="text-white text-lg">⇅</span>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <label className="block text-sm text-gray-400">Output (estimated)</label>
            <input
              type="number"
              value={outputValue}
              readOnly
              className="bg-transparent text-white text-lg outline-none mt-1 w-full"
              placeholder="0.00"
            />
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-sm"
              onClick={() => console.log("Select Token")}
            >
              {outputToken}
              <FaChevronDown />
            </button>
            <div className="absolute bg-gray-800 w-full rounded-lg mt-2 shadow-lg hidden">
              {tokens.map((token) => (
                <button
                  key={token}
                  onClick={() => setOutputToken(token)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Unlock Wallet Button */}
        <Button buttonText="Unlock Wallet" className="bg-green-600 w-full py-3 mt-4" />

        <p className="text-sm text-gray-400 text-center mt-2">
          Slippage Tolerance 0.1%
        </p>
      </div>
    </div>
  );
};

export default ExchangePage;
