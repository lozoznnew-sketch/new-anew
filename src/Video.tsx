import React from 'react'
import { AbsoluteFill, Audio, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing } from 'remotion'
import { IsoGrid } from './components/IsoGrid'
import { Particles } from './components/Particles'
import { Vignette } from './components/Vignette'
import { ModelCard } from './components/ModelCard'
import { LaserWeb } from './components/LaserWeb'
import { SubtitleTrack } from './components/SubtitleTrack'
import { MODELS } from './data/models'

interface Camera {
  x: number
  y: number
  scale: number
  rotX: number
  rotY: number
}

// Cinematic virtual camera: wide push-in, quadrant dives, whip-pans, final pull-back.
const getCamera = (frame: number): Camera => {
  // 00:00-00:09 wide slow push-in
  const wide = interpolate(frame, [0, 270], [0.86, 1.02], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  // Quadrant focus targets, each with a whip-pan entry
  const phases: Array<[number, number, number, number, number]> = [
    // [startFrame, targetX, targetY, scaleBoost, tilt]
    [270, 290, 370, 2.2, 6],
    [630, 790, 810, 2.2, 6],
    [1050, 290, 1250, 2.2, 6],
    [1470, 790, 1690, 2.2, 6],
  ]
  let cam: Camera = { x: 0, y: 0, scale: wide, rotX: 0, rotY: 0 }
  for (let i = 0; i < phases.length; i++) {
    const [start, tx, ty, boost, tilt] = phases[i]
    const end = i < phases.length - 1 ? phases[i + 1][0] : 1890
    if (frame >= start && frame < end) {
      const t = interpolate(frame, [start, start + 45, end, end + 20], [0, 1, 1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.inOut(Easing.cubic),
      })
      cam = {
        x: (540 - tx) * t,
        y: (960 - ty) * t,
        scale: wide * (1 + (boost - 1) * t),
        rotX: tilt * t * 0.6,
        rotY: tilt * t * 0.45,
      }
    }
  }
  // 01:03-01:12 dramatic pull-back into wide isometric overview
  if (frame >= 1890) {
    const t = interpolate(frame, [1890, 2010], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    })
    cam = {
      x: interpolate(frame, [1890, 2010], [0, -80]) * 0,
      y: t * -40,
      scale: interpolate(frame, [1890, 2010], [2.2, 1.05]),
      rotX: t * 16,
      rotY: t * -8,
    }
  }
  return cam
}

const GlitchTitle: React.FC = () => {
  const frame = useCurrentFrame()
  const enter = spring({ frame: frame - 40, fps: 30, config: { damping: 14, stiffness: 120, mass: 0.6 } })
  const glitch = frame > 150 && frame < 190 ? Math.sin(frame * 1.7) * 8 : 0
  const opacity = interpolate(frame, [0, 60, 250, 285], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  return (
    <AbsoluteFill style={{ alignItems: 'center', paddingTop: 620, opacity, pointerEvents: 'none' }}>
      <div
        style={{
          transform: 'scale(' + enter + ') translateX(' + glitch + 'px)',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ color: '#00F5B8', fontSize: 26, letterSpacing: 18, fontWeight: 600 }}>
          NEURAL ARCHITECTURE
        </div>
        <div
          style={{
            color: '#EAFDF9',
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 1.05,
            textShadow: '0 0 40px rgba(0,245,184,0.55), 0 0 80px rgba(0,210,255,0.3)',
          }}
        >
          8 SPECIALIZED
        </div>
        <div style={{ color: '#00D2FF', fontSize: 92, fontWeight: 900, textShadow: '0 0 40px rgba(0,210,255,0.5)' }}>
          AI MODELS
        </div>
      </div>
    </AbsoluteFill>
  )
}

const CallToAction: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const pop = spring({ frame: frame - 1935, fps, config: { damping: 14, stiffness: 120, mass: 0.6 } })
  const breathe = 1 + Math.sin(frame / 30) * 0.03
  if (frame < 1935) return null
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <div
        style={{
          transform: 'scale(' + pop * breathe + ')',
          padding: '30px 60px',
          borderRadius: 28,
          background: 'rgba(4, 20, 24, 0.75)',
          border: '2px solid rgba(0, 245, 184, 0.5)',
          backdropFilter: 'blur(25px)',
          boxShadow: '0 0 60px rgba(0,245,184,0.45), inset 0 0 30px rgba(0,245,184,0.12)',
          color: '#EAFDF9',
          fontSize: 56,
          fontWeight: 900,
          fontFamily: 'Tahoma, sans-serif',
          direction: 'rtl',
          textShadow: '0 0 25px rgba(0,245,184,0.7)',
        }}
      >
        احفظ الفيديو للمستقبل
      </div>
    </AbsoluteFill>
  )
}

// Which quadrant is emphasized right now (drives card glow).
const emphasizedIndex = (frame: number) => {
  if (frame >= 270 && frame < 630) return 0
  if (frame >= 630 && frame < 1050) return 3
  if (frame >= 1050 && frame < 1470) return 4
  if (frame >= 1470 && frame < 1890) return 7
  return -1
}

export const AiModelsVideo: React.FC = () => {
  const frame = useCurrentFrame()
  const cam = getCamera(frame)
  const shockwave = interpolate(frame, [1890, 1980, 2070], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  return (
    <AbsoluteFill style={{ background: '#020608' }}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 42%, #051C20 0%, #020608 70%)',
        }}
      />
      <IsoGrid />
      <Particles />
      <AbsoluteFill style={{ perspective: 1200 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform:
              'translate3d(' + cam.x + 'px, ' + cam.y + 'px, 0) rotateX(' + cam.rotX + 'deg) rotateY(' + cam.rotY + 'deg) scale(' + cam.scale + ')',
          }}
        >
          {MODELS.map((m, i) => (
            <ModelCard key={m.code} model={m} index={i} emphasized={i === emphasizedIndex(frame)} />
          ))}
        </div>
      </AbsoluteFill>
      <LaserWeb opacity={frame >= 1890 ? 0.35 + shockwave * 0.65 : 0.55} />
      <GlitchTitle />
      <CallToAction />
      <SubtitleTrack />
      <Vignette />
      <Audio src={staticFile('audio/voiceover.mp3')} />
    </AbsoluteFill>
  )
}
