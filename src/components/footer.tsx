"use client"
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";
import { MdDesktopWindows, MdTabletMac, MdSmartphone } from "react-icons/md";

export const Footer: React.FC = () => {
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/iPad|Tablet|Android(?!.*Mobile)/i.test(userAgent)) {
      setDeviceType("tablet");
    } else if (/Mobile|iPhone|Android/i.test(userAgent)) {
      setDeviceType("phone");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  return (
    <footer className="text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4">
        <div className="flex items-center space-x-3">
          <p className="text-sm">Copyright @ Rubyswap 2021</p>
          <MdDesktopWindows
            className={`text-xl ${
              deviceType === "desktop" ? "text-blue-500" : "text-gray-400"
            }`}
          />
          <MdTabletMac
            className={`text-xl ${
              deviceType === "tablet" ? "text-blue-500" : "text-gray-400"
            }`}
          />
          <MdSmartphone
            className={`text-xl ${
              deviceType === "phone" ? "text-blue-500" : "text-gray-400"
            }`}
          />
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="text-xl hover:text-blue-500 transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-blue-700 transition-colors" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-blue-400 transition-colors" />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-gray-300 transition-colors" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="text-xl hover:text-red-600 transition-colors" />
          </a>
          <a href="#" aria-label="Discord">
            <FaDiscord className="text-xl hover:text-purple-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};