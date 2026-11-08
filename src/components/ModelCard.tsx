import React from 'react'
import { spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion'
import { Brain, Sparkles, Workflow, Route, Eye, Cpu, Braces, Scissors } from 'lucide-react'
import type { AiModel } from '../data/models'

const ICONS: Record<string, React.FC<{ size?: number; color?: string }>> = {
  Brain, Sparkles, Workflow, Route, Eye, Cpu, Braces, Scissors,
}

const HEX = '0123456789ABCDEF'
const hexAt = (frame: number, offset: number) =>
  HEX[Math.floor(frame / 12 + offset) % 16] + HEX[Math.floor(frame / 7 + offset * 3) % 16]

// Sci-fi corner brackets [ + ] on a glass card.
const Bracket: React.FC<{ pos: string; color: string }> = ({ pos, color }) => {
  const horizontal = pos.includes('top') ? 'top' : 'bottom'
  const vertical = pos.includes('left') ? 'left' : 'right'
  return (
    <div
      style={{
        position: 'absolute',
        [horizontal]: 10,
        [vertical]: 10,
        width: 22,
        height: 22,
        borderTop: horizontal === 'top' ? '2px solid ' + color : undefined,
        borderBottom: horizontal === 'bottom' ? '2px solid ' + color : undefined,
        borderLeft: vertical === 'left' ? '2px solid ' + color : undefined,
        borderRight: vertical === 'right' ? '2px solid ' + color : undefined,
      }}
    />
  )
}

export const ModelCard: React.FC<{ model: AiModel; index: number; emphasized: boolean }> = ({
  model,
  index,
  emphasized,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const entrance = spring({ frame: frame - 20 - index * 6, fps, config: { damping: 14, stiffness: 120, mass: 0.6 } })
  const pulse = 0.5 + Math.abs(Math.sin(frame / 26)) * 0.5
  const glow = emphasized ? 26 : 12
  const Icon = ICONS[model.icon]
  return (
    <div
      style={{
        position: 'absolute',
        left: model.x,
        top: model.y,
        width: 400,
        height: 340,
        opacity: entrance,
        transform: 'translateY(' + (1 - entrance) * 60 + 'px) scale(' + (0.9 + entrance * 0.1) + ')',
        background: 'rgba(4, 20, 24, 0.75)',
        border: '1px solid rgba(0, 245, 184, 0.25)',
        borderRadius: 24,
        backdropFilter: 'blur(25px)',
        boxShadow:
          '0 0 ' + glow + 'px rgba(0, 245, 184, 0.35),' +
          'drop-shadow(0 0 15px rgba(0, 245, 184, 0.5))',
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Bracket pos="top-left" color={model.accent} />
      <Bracket pos="top-right" color={model.accent} />
      <Bracket pos="bottom-left" color={model.accent} />
      <Bracket pos="bottom-right" color={model.accent} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(' + (model.accent === '#00F5B8' ? '0,245,184' : model.accent === '#00D2FF' ? '0,210,255' : model.accent === '#F59E0B' ? '245,158,11' : '139,92,246') + ', 0.12)',
            boxShadow: '0 0 ' + 12 * pulse + 'px ' + model.accent,
          }}
        >
          <Icon size={32} color={model.accent} />
        </div>
        <div>
          <div style={{ color: '#EAFDF9', fontSize: 30, fontWeight: 800, letterSpacing: 2, fontFamily: 'Inter, sans-serif' }}>
            {model.code}
          </div>
          <div style={{ color: 'rgba(234,253,249,0.6)', fontSize: 17, fontFamily: 'Inter, sans-serif' }}>
            {model.title}
          </div>
        </div>
      </div>
      <div style={{ color: model.accent, fontSize: 24, fontWeight: 700, fontFamily: 'Tahoma, sans-serif', direction: 'rtl' }}>
        {model.tagline}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            padding: '6px 14px',
            borderRadius: 999,
            border: '1px solid ' + model.accent,
            color: model.accent,
            fontSize: 15,
            fontFamily: 'monospace',
            letterSpacing: 2,
            opacity: 0.55 + pulse * 0.45,
            boxShadow: '0 0 ' + 10 * pulse + 'px rgba(0,245,184,0.4)',
          }}
        >
          ACTIVE / INFERENCE
        </div>
        <div style={{ color: 'rgba(0,210,255,0.5)', fontSize: 13, fontFamily: 'monospace' }}>
          0x{hexAt(frame, index)} :: {Math.floor(interpolate(Math.sin(frame / 40), [-1, 1], [88, 99]))}%
        </div>
      </div>
    </div>
  )
}
