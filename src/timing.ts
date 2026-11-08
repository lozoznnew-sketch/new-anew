import { useCurrentFrame, useVideoConfig } from 'remotion'

export const FPS = 30
export const VOICEOVER_DURATION_SECONDS = 36.2
export const DURATION_IN_FRAMES = Math.round(VOICEOVER_DURATION_SECONDS * FPS)
const DESIGN_DURATION_IN_FRAMES = 2160

// Only visuals are retimed; Audio keeps its original playback speed and pitch.
// Camera keyframes and subtitle cues remain in the original design timeline.
export function useTimelineFrame(): number {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  return frame * DESIGN_DURATION_IN_FRAMES / durationInFrames
}
