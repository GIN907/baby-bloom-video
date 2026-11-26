import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const HelloBabyBloom: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle up-and-down movement for Baby Bloom
  const bloomFloatY = Math.sin(frame * 0.06) * 14;

  // Slightly offset floating wave for the yellow star
  const starFloatY = Math.sin(frame * 0.06 + 1.5) * 12;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#E8F6FF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        fontSize: 56,
        fontFamily: 'sans-serif',
      }}
    >
      {/* Row holding Baby Bloom and the bright yellow star */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 48,
        }}
      >
        {/* Baby Bloom circle */}
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            backgroundColor: '#FF9EAA',
            transform: `translateY(${bloomFloatY}px)`,
          }}
        />

        {/* Bright yellow star */}
        <svg
          width="150"
          height="150"
          viewBox="0 0 130 130"
          style={{
            transform: `translateY(${starFloatY}px)`,
          }}
        >
          <polygon
            points="65,10 81,44 118,49 91,75 98,112 65,94 32,112 39,75 12,49 49,44"
            fill="#FFD166"
            stroke="#F4A261"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>Hello! Baby Bloom is here!</div>
    </AbsoluteFill>
  );
};
