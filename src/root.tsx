import React from 'react';
import { Composition } from 'remotion';
import { HelloBabyBloom } from './HelloBabyBloom';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloBabyBloom"
        component={HelloBabyBloom}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
