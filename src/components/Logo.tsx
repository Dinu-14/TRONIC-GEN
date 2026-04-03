import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tronicgen Logo"
    >
      {/* Circuit board icon */}
      <g transform="translate(2, 5)">
        {/* Chip body */}
        <rect
          x="8"
          y="8"
          width="24"
          height="24"
          rx="3"
          fill="#2563EB"
          stroke="#1D4ED8"
          strokeWidth="1.5"
        />
        {/* Inner circuit pattern */}
        <rect x="14" y="14" width="12" height="12" rx="1" fill="#3B82F6" />
        <circle cx="20" cy="20" r="3" fill="#BFDBFE" />
        {/* Pins - top */}
        <line x1="14" y1="8" x2="14" y2="2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="8" x2="20" y2="2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="8" x2="26" y2="2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        {/* Pins - bottom */}
        <line x1="14" y1="32" x2="14" y2="38" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="32" x2="20" y2="38" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="32" x2="26" y2="38" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        {/* Pins - left */}
        <line x1="8" y1="14" x2="2" y2="14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="20" x2="2" y2="20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="26" x2="2" y2="26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        {/* Pins - right */}
        <line x1="32" y1="14" x2="38" y2="14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="20" x2="38" y2="20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="26" x2="38" y2="26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Company name */}
      <text
        x="50"
        y="35"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="-0.5"
      >
        <tspan fill="#2563EB">TRONIC</tspan>
        <tspan fill="#ffffff">GEN</tspan>
      </text>
    </svg>
  );
}
