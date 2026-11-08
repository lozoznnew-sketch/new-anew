import { useCurrentFrame, useVideoConfig, spring } from 'remotion'
import { CUES } from '../data/models'

// Frosted glass karaoke capsule at the bottom, perfectly synced to the voiceover.
export const SubtitleTrack: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const activeIndex = CUES.findIndex((c) => frame >= c.from && frame < c.to)
  if (activeIndex < 0) return null
  const cue = CUES[activeIndex]
  const pop = spring({ frame: frame - cue.from, fps, config: { damping: 14, stiffness: 160, mass: 0.5 } })
  return (
    <div
      key={activeIndex}
      style={{
        position: 'absolute',
        left: 90,
        right: 90,
        bottom: 110,
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(' + (0.92 + pop * 0.08) + ')',
      }}
    >
      <div
        style={{
          background: 'rgba(2, 12, 15, 0.85)',
          border: '1px solid rgba(0, 210, 255, 0.35)',
          borderRadius: 999,
          padding: '18px 38px',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 0 30px rgba(0, 245, 184, 0.25), inset 0 0 20px rgba(0, 210, 255, 0.08)',
          color: '#00F5B8',
          fontSize: 42,
          fontWeight: 800,
          fontFamily: 'Tahoma, sans-serif',
          direction: 'rtl',
          textAlign: 'center',
          textShadow: '0 0 18px rgba(0, 245, 184, 0.6)',
          whiteSpace: 'pre-wrap',
        }}
      >
        {cue.text}
      </div>
    </div>
  )
}
