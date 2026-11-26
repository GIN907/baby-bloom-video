import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const HelloBabyBloom: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle up-and-down wave (moves about 14 pixels up and down)
  const floatY = Math.sin(frame * 0.06) * 14;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#E8F6FF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        fontSize: 56,
        fontFamily: 'sans-serif',
      }}
    >
      {/* Baby Bloom circle with gentle vertical movement */}
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: '50%',
          backgroundColor: '#FF9EAA',
          transform: `translateY(${floatY}px)`,
        }}
      />

      <div>Hello! Baby Bloom is here!</div>
    </AbsoluteFill>
  );
};
