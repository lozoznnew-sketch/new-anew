import { AbsoluteFill, useCurrentFrame } from 'remotion'

// Isometric 3D perspective grid that breathes with the camera.
export const IsoGrid: React.FC = () => {
  const frame = useCurrentFrame()
  const breathe = Math.sin(frame / 90) * 6
  return (
    <AbsoluteFill style={{ overflow: 'hidden', opacity: 0.16, perspective: 1200 }}>
      <div
        style={{
          position: 'absolute',
          inset: '-60%',
          transform: 'rotateX(62deg) translateY(' + (-10 + breathe) + 'px)',
          backgroundImage:
            'repeating-linear-gradient(90deg, #00F5B8 0px, #00F5B8 1px, transparent 1px, transparent 90px),' +
            'repeating-linear-gradient(0deg, #00F5B8 0px, #00F5B8 1px, transparent 1px, transparent 90px)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />
    </AbsoluteFill>
  )
}
