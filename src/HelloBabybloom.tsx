import React from 'react';
import { AbsoluteFill } from 'remotion';

export const HelloBabyBloom: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFF9F0',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        fontFamily: 'sans-serif',
      }}
    >
      Hi! I am Baby Bloom!
    </AbsoluteFill>
  );
};
