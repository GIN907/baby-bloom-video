import React from 'react';
import { AbsoluteFill } from 'remotion';

export const HelloBabyBloom: React.FC = () => {
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
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: '50%',
          backgroundColor: '#FF9EAA',
        }}
      />

      <div>Hello! Baby Bloom is here!</div>
    </AbsoluteFill>
  );
};
