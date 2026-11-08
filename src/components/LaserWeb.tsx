import { useCurrentFrame } from 'remotion'
import { MODELS } from '../data/models'

// Animated SVG laser traces with a continuously running photon pulse.
export const LaserWeb: React.FC<{ opacity?: number }> = ({ opacity = 0.6 }) => {
  const frame = useCurrentFrame()
  const centers = MODELS.map((m) => ({ x: m.x + 200, y: m.y + 170 }))
  const links: Array<[number, number]> = [
    [0, 1], [0, 3], [1, 2], [2, 5], [3, 4], [4, 6], [5, 7], [6, 7], [0, 4], [1, 5],
  ]
  return (
    <svg
      width="1080"
      height="1920"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      {links.map(([a, b], i) => {
        const p1 = centers[a]
        const p2 = centers[b]
        const midX = (p1.x + p2.x) / 2 + Math.sin(frame / 50 + i) * 30
        const midY = (p1.y + p2.y) / 2 + Math.cos(frame / 60 + i) * 30
        const d = 'M' + p1.x + ' ' + p1.y + ' Q' + midX + ' ' + midY + ' ' + p2.x + ' ' + p2.y
        const color = i % 2 === 0 ? '#00F5B8' : '#00D2FF'
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray="10 14" opacity={opacity * 0.35} />
            <path
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={3}
              strokeDasharray="3 220"
              strokeDashoffset={-((frame * 4 + i * 60) % 223)}
              opacity={opacity}
              style={{ filter: 'drop-shadow(0 0 6px ' + color + ')' }}
            />
          </g>
        )
      })}
    </svg>
  )
}
