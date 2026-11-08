import { AbsoluteFill, useCurrentFrame } from 'remotion'

const rand = (seed: number) => {
  const x = Math.sin(seed * 127.1) * 43758.5453
  return x - Math.floor(x)
}

// Floating stardust / bokeh particles with variable opacity.
export const Particles: React.FC<{ count?: number }> = ({ count = 46 }) => {
  const frame = useCurrentFrame()
  const dots = []
  for (let i = 0; i < count; i++) {
    const baseX = rand(i + 1) * 1080
    const baseY = rand(i + 50) * 1920
    const speed = 0.2 + rand(i + 99) * 0.7
    const size = 2 + rand(i + 7) * 5
    const y = (baseY - frame * speed + 2400) % 2400 - 240
    const twinkle = 0.25 + Math.abs(Math.sin((frame + i * 13) / 40)) * 0.75
    const color = i % 3 === 0 ? '#00D2FF' : i % 3 === 1 ? '#00F5B8' : '#8B5CF6'
    dots.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: baseX,
          top: y,
          width: size,
          height: size,
          borderRadius: size,
          background: color,
          opacity: twinkle * 0.7,
          filter: 'blur(' + (size > 5 ? 2 : 0) + 'px)',
          boxShadow: '0 0 ' + size * 3 + 'px ' + color,
        }}
      />
    )
  }
  return <AbsoluteFill>{dots}</AbsoluteFill>
}
