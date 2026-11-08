import React from 'react'
import { Composition } from 'remotion'
import { AiModelsVideo } from './Video'

export const RemotionRoot: React.FC = () => (
  <Composition
    id="AiModels"
    component={AiModelsVideo}
    durationInFrames={2160}
    fps={30}
    width={1080}
    height={1920}
  />
)
