import { useState, useEffect } from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const BrandLogo = ({ 
  className = "", 
  size = "lg"
}: BrandLogoProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const staticLogo = { src: "/logos/stbc.png", alt: "Stories Brewery & Coffee" };

  const sizeClasses = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto"
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`logo-container ${className}`}>
      <img
        src={staticLogo.src}
        alt={staticLogo.alt}
        className={`${sizeClasses[size]} logo-slide transition-all duration-600 ease-in-out ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      />
    </div>
  );
};

export default BrandLogo;