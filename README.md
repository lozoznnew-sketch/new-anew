# 8 Specialized AI Models — Cinematic Motion Graphics Video

A 72-second (2160 frames @ 30fps) vertical 1080x1920 motion graphics video built with Remotion + React + lucide-react.

## One-click render (no local setup)
1. Make sure `public/audio/voiceover.mp3` exists in this repo (see below).
2. Open the repo on GitHub > **Actions** tab > **Render Video** > **Run workflow** > Run on `main`.
3. Wait for the run to finish (~5-10 min), then download the **ai-models-video** artifact: it contains `video.mp4`.

## Add the voiceover audio
- Go to the repo on GitHub > open `public/audio/` > **Add file > Upload files** > drag `voiceover.mp3` (72s) > commit.
- The audio must be exactly at `public/audio/voiceover.mp3`.

## Local development
```bash
npm install
npx remotion studio   # live preview at http://localhost:3000
npx remotion render src/index.ts AiModels out/video.mp4 --codec=h264
```

## Structure
- `src/Video.tsx` — cinematic 3D virtual camera + scene orchestration
- `src/components/` — glass model cards, isometric grid, particles, laser web, karaoke subtitles, vignette
- `src/data/models.ts` — the 8 models + 31 subtitle cues (synced to the 72s voiceover)
