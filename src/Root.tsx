import React from 'react'
import { Composition } from 'remotion'
import { AiModelsVideo } from './Video'
import { DURATION_IN_FRAMES, FPS } from './timing'

export const RemotionRoot: React.FC = () => (
  <Composition
    id="AiModels"
    component={AiModelsVideo}
    durationInFrames={DURATION_IN_FRAMES}
    fps={FPS}
    width={1080}
    height={1920}
  />
)
