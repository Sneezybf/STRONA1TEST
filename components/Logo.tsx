import React from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 180 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    aria-label="Beautiflow Logo"
  >
    <defs>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
      </style>
    </defs>
    <text
      x="0"
      y="85"
      fontFamily="'Playfair Display', serif"
      fontSize="120"
      fontWeight="700"
      fill="currentColor"
    >
      B
    </text>
    <text
      x="80"
      y="85"
      fontFamily="'Playfair Display', serif"
      fontSize="120"
      fontWeight="700"
      fill="currentColor"
    >
      F
    </text>
  </svg>
);