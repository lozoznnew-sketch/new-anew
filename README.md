# 8 Specialized AI Models — Cinematic Motion Graphics Video

A 36.2-second (1086 frames @ 30fps) vertical 1080x1920 motion graphics video built with Remotion + React + lucide-react.

## One-click render (no local setup)
1. The supplied recording is included at `public/audio/voiceover.wav`.
2. Open GitHub > **Actions** > **Render Video** > **Run workflow** on `main`.
3. Wait for the run to finish, then download the **ai-models-video** artifact containing `video.mp4`.

## Voiceover and timing
- `public/audio/voiceover.wav` is an exact copy of `Generated Audio November 08, 2026 - 6_10PM.wav` from the repository root. The original file is preserved.
- The WAV header reports 36.2 seconds. Playback keeps the original speed and pitch, without time stretching or lossy conversion.
- `src/timing.ts` defines the 30fps composition duration and maps actual frames onto the original 2160-frame design timeline.
- Camera movement, model cards, title, effects, ending and the existing 31 subtitle cues cover the full recording rather than leaving a silent second half.
- Subtitle timing is scaled proportionally from the original design, not newly transcribed or word-aligned to the recording.
- When replacing the recording, update `VOICEOVER_DURATION_SECONDS` in `src/timing.ts` to its measured duration.

## Local development
```bash
npm install
npx remotion studio
npx remotion render src/index.ts AiModels out/video.mp4 --codec=h264
```

## Structure
- `src/Root.tsx` — composition dimensions, frame rate and duration
- `src/timing.ts` — shared duration constants and visual timeline mapping
- `src/Video.tsx` — cinematic camera, scenes and original-speed WAV playback
- `src/components/` — model cards, grid, particles, laser web, subtitle track and vignette
- `src/data/models.ts` — eight models and 31 original design subtitle cues
