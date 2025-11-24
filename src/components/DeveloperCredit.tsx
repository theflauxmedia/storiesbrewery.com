import { useState, useEffect } from "react";

const DeveloperCredit = () => {
  return (
    <div className="bg-black text-white py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-3">
          <div className="relative logo-container">
            <img 
              src="/flaux.png"
              alt="Stories Brewery & Coffee Logo" 
              className="h-6 w-auto brightness-0 invert logo-slide"
            />
          </div>
          <p className="text-sm">
            This website was designed and developed by{" "}
            <a
              href="https://theflauxmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-300 transition-colors underline"
            >
              The Flaux Media
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredit;