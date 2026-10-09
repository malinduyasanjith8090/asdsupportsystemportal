import React from 'react';

interface BloomLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  withContainer?: boolean;
}

export const BloomLogo: React.FC<BloomLogoProps> = ({
  className = "w-9 h-9",
  size,
  showText = false,
  withContainer = false
}) => {
  const containerStyle = size ? { width: size, height: size } : undefined;

  return (
    <div 
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={containerStyle}
      title="Bloom - ASD Support System Mobile App"
    >
      <svg
        viewBox={showText ? "0 0 500 500" : "140 85 220 220"}
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {withContainer && showText && (
          <rect 
            x="20" 
            y="20" 
            width="460" 
            height="460" 
            rx="110" 
            ry="110" 
            fill="#ffffff" 
            stroke="#e7e5e4" 
            strokeWidth="5" 
          />
        )}

        {/* 8 Flower Petals radiating from center (250, 195) */}
        {/* Top-Left / Sky Blue */}
        <g transform="rotate(-22.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#7ec5f5"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Top-Right / Mint Green */}
        <g transform="rotate(22.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#7fedb2"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Upper-Right / Soft Pink */}
        <g transform="rotate(67.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#fa9dc6"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Lower-Right / Lavender Purple */}
        <g transform="rotate(112.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#b7b8f9"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom-Right / Sky Blue */}
        <g transform="rotate(157.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#7ec5f5"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom-Left / Mint Green */}
        <g transform="rotate(202.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#7fedb2"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Lower-Left / Soft Pink */}
        <g transform="rotate(247.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#fa9dc6"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Upper-Left / Lavender Purple */}
        <g transform="rotate(292.5 250 195)">
          <path
            d="M 235 145 C 230 55, 270 55, 265 145 Z"
            fill="#b7b8f9"
            stroke="#262626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Center Smiling Yellow Disk */}
        <circle 
          cx="250" 
          cy="195" 
          r="54" 
          fill="#fae486" 
          stroke="#262626" 
          strokeWidth="5" 
        />

        {/* Eyes (happy squinting curved strokes) */}
        <path
          d="M 226 182 C 228 177, 236 177, 238 182"
          stroke="#262626"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 262 182 C 264 177, 272 177, 274 182"
          stroke="#262626"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cheerful Gentle Smile */}
        <path
          d="M 226 200 C 233 226, 267 226, 274 200"
          stroke="#262626"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Optional Bloom Wordmark */}
        {showText && (
          <text
            x="250"
            y="352"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="68"
            fill="#fa85bb"
            letterSpacing="1.5"
          >
            Bloom
          </text>
        )}
      </svg>
    </div>
  );
};
