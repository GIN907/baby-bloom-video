import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

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
  const bloomFloatY = Math.sin(frame * 0.06) * 8;
  const starFloatY = Math.sin(frame * 0.06 + 1.5) * 12;
  const ballFloatY = Math.sin(frame * 0.06 + 3.0) * 14;
  const cloudFloatY = Math.sin(frame * 0.06 + 4.5) * 10;

  // Staggered entrances
  const bloomStyle = getEntranceStyle(frame, 0, bloomFloatY);
  const starStyle = getEntranceStyle(frame, 75, starFloatY);
  const ballStyle = getEntranceStyle(frame, 135, ballFloatY);
  const cloudStyle = getEntranceStyle(frame, 195, cloudFloatY);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#BCE0F7',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        fontSize: 52,
        fontFamily: 'sans-serif',
        color: '#3D314A',
      }}
    >
      {/* Row of 3 floating objects */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 64 }}>
        <svg width="140" height="140" viewBox="0 0 130 130" style={starStyle}>
          <polygon
            points="65,10 81,44 118,49 91,75 98,112 65,94 32,112 39,75 12,49 49,44"
            fill="#FFD166"
            stroke="#F4A261"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>

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

      {/* Your Baby Bloom Character Image */}
      <Img
        src={staticFile('baby-bloom.png')}
        style={{
          width: 280,
          height: 'auto',
          ...bloomStyle,
        }}
      />

      {/* Greeting text */}
      <div style={{ fontWeight: 'bold' }}>Hello! I am Baby Bloom!</div>
    </AbsoluteFill>
  );
};
