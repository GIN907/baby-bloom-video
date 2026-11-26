import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const HelloBabyBloom: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle up-and-down floating waves with soft offsets
  const bloomFloatY = Math.sin(frame * 0.06) * 12;
  const starFloatY = Math.sin(frame * 0.06 + 1.5) * 12;
  const ballFloatY = Math.sin(frame * 0.06 + 3.0) * 14;
  const cloudFloatY = Math.sin(frame * 0.06 + 4.5) * 10;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#E8F6FF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 36,
        fontSize: 52,
        fontFamily: 'sans-serif',
      }}
    >
      {/* Row of 3 colorful objects */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 56,
        }}
      >
        {/* 1. Bright Yellow Star */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 130 130"
          style={{ transform: `translateY(${starFloatY}px)` }}
        >
          <polygon
            points="65,10 81,44 118,49 91,75 98,112 65,94 32,112 39,75 12,49 49,44"
            fill="#FFD166"
            stroke="#F4A261"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>

        {/* 2. Colorful Striped Ball */}
        <svg
          width="130"
          height="130"
          viewBox="0 0 120 120"
          style={{ transform: `translateY(${ballFloatY}px)` }}
        >
          <defs>
            <clipPath id="ballClip">
              <circle cx="60" cy="60" r="48" />
            </clipPath>
          </defs>
          <g clipPath="url(#ballClip)">
            <rect x="10" y="10" width="100" height="100" fill="#EF476F" />
            <rect x="10" y="34" width="100" height="18" fill="#FFD166" />
            <rect x="10" y="68" width="100" height="18" fill="#06D6A0" />
          </g>
        </svg>

        {/* 3. Fluffy Cloud */}
        <svg
          width="160"
          height="120"
          viewBox="0 0 150 110"
          style={{ transform: `translateY(${cloudFloatY}px)` }}
        >
          <path
            d="M36 86 H114 C128 86 138 76 138 63 C138 51 129 41 117 40 C113 23 98 12 80 12 C61 12 46 25 43 43 C27 44 14 57 14 73 C14 81 24 86 36 86 Z"
            fill="#FFFFFF"
            stroke="#90E0EF"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Baby Bloom circle */}
      <div
        style={{
          width: 170,
          height: 170,
          borderRadius: '50%',
          backgroundColor: '#FF9EAA',
          transform: `translateY(${bloomFloatY}px)`,
        }}
      />

      {/* Greeting text */}
      <div>Hello! Baby Bloom is here!</div>
    </AbsoluteFill>
  );
};
