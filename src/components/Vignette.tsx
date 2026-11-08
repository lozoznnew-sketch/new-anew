import { AbsoluteFill } from 'remotion'

// Corner vignette to focus the eye.
export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        'radial-gradient(ellipse 75% 55% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)',
      pointerEvents: 'none',
    }}
  />
)
