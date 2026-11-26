import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

// Helper for a soft fade-in and gentle rise starting at a specific frame
const getEntranceStyle = (frame: number, startFrame: number, floatY: number) => {
  const opacity = interpolate(frame, [startFrame, startFrame + 24], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const riseY = interpolate(frame, [startFrame, startFrame + 24], [24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return {
    opacity,
    transform: `translateY(${riseY + floatY}px)`,
  };
};

export const HelloBabyBloom: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle floating waves
  const bloomFloatY = Math.sin(frame * 0.06) * 10;
  const starFloatY = Math.sin(frame * 0.06 + 1.5) * 12;
  const ballFloatY = Math.sin(frame * 0.06 + 3.0) * 14;
  const cloudFloatY = Math.sin(frame * 0.06 + 4.5) * 10;

  // Staggered gentle entrances (at 30fps: 0s, 2.5s, 4.5s, 6.5s)
  const bloomStyle = getEntranceStyle(frame, 0, bloomFloatY);
  const starStyle = getEntranceStyle(frame, 75, starFloatY);
  const ballStyle = getEntranceStyle(frame, 135, ballFloatY);
  const cloudStyle = getEntranceStyle(frame, 195, cloudFloatY);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#E8F6FF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 36,
        fontSize: 50,
        fontFamily: 'sans-serif',
        color: '#3D314A',
      }}
    >
      {/* Row of 3 colorful objects appearing one by one */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 56,
        }}
      >
        {/* 1. Bright Yellow Star (appears around 2.5s) */}
        <svg width="140" height="140" viewBox="0 0 130 130" style={starStyle}>
          <polygon
            points="65,10 81,44 118,49 91,75 98,112 65,94 32,112 39,75 12,49 49,44"
            fill="#FFD166"
            stroke="#F4A261"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>

        {/* 2. Colorful Striped Ball (appears around 4.5s) */}
        <svg width="130" height="130" viewBox="0 0 120 120" style={ballStyle}>
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

        {/* 3. Fluffy Cloud (appears around 6.5s) */}
        <svg width="160" height="120" viewBox="0 0 150 110" style={cloudStyle}>
          <path
            d="M36 86 H114 C128 86 138 76 138 63 C138 51 129 41 117 40 C113 23 98 12 80 12 C61 12 46 25 43 43 C27 44 14 57 14 73 C14 81 24 86 36 86 Z"
            fill="#FFFFFF"
            stroke="#90E0EF"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Cute Baby Bloom Character (appears first at 0s) */}
      <svg width="190" height="190" viewBox="0 0 180 180" style={bloomStyle}>
        {/* Cute little leaf sprout on top */}
        <path d="M90 22 C86 8, 72 6, 68 14 C78 15, 84 18, 88 23" fill="#6BCB77" />
        <path d="M90 22 C96 8, 110 8, 112 16 C102 16, 96 19, 92 23" fill="#6BCB77" />

        {/* Pink head */}
        <circle cx="90" cy="98" r="76" fill="#FF9EAA" />

        {/* Rosy cheeks */}
        <ellipse cx="52" cy="110" rx="12" ry="7" fill="#FF758F" opacity="0.6" />
        <ellipse cx="128" cy="110" rx="12" ry="7" fill="#FF758F" opacity="0.6" />

        {/* Friendly eyes with white sparkles */}
        <circle cx="66" cy="94" r="9" fill="#3D314A" />
        <circle cx="63" cy="91" r="3.5" fill="#FFFFFF" />
        <circle cx="114" cy="94" r="9" fill="#3D314A" />
        <circle cx="111" cy="91" r="3.5" fill="#FFFFFF" />

        {/* Happy smile */}
        <path
          d="M74 116 Q90 130 106 116"
          stroke="#3D314A"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Greeting text */}
      <div style={{ fontWeight: 'bold' }}>Hello! I am Baby Bloom!</div>
    </AbsoluteFill>
  );
};
