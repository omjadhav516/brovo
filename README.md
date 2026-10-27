# SAYALI — OUR UNIVERSE ✨
> A world-class, cinematic, romantic interactive birthday universe dedicated to Sayali.

Welcome to **SAYALI — OUR UNIVERSE**. This website was crafted to celebrate Sayali's birthday through a cohesive digital galaxy where every star represents a treasured memory, every constellation represents a chapter of your love story, and every gift reveals a personal surprise.

---

## 🌌 Visual Design System

- **Cosmic Black**: `#050510`
- **Midnight Navy**: `#0B1028`
- **Galaxy Purple**: `#5426A8`
- **Nebula Violet**: `#A56BFF`
- **Romantic Pink**: `#FF82B2`
- **Champagne Gold**: `#FFD88A`
- **Soft White**: `#F6F3FF`

---

## 🌟 The 7 Complete Pages

1. **Cinematic Home (`/`)**:
   - Darkness gradually reveals a starfield, drifting particles, glowing orbital paths, and cinematic text reveals.
   - Reveal lines:
     - *"Somewhere in this infinite universe…"*
     - *"There is one person who makes my universe beautiful."*
     - *"SAYALI ❤️"*
   - Main greeting: *"Happy Birthday, My Sayali"*
   - Supporting message: *"Out of all the stars in this endless universe, you are the one that makes my world shine."*
   - Real personal photograph in a glowing cosmic frame.
   - Interactive buttons: **Enter Our Universe**, **Discover Our Memories**, **Open Your First Gift**.
   - Working skip-intro button and animated scroll prompt.

2. **Our Love Story (`/story`)**:
   - Vertical cinematic relationship timeline with glowing star markers and glass cards.
   - 7 Milestones:
     1. *How our story began*
     2. *Our first special memory*
     3. *Our happiest moments*
     4. *Our funniest memories*
     5. *Our favorite photographs*
     6. *The moments we treasure*
     7. *Our story continues*

3. **Our Memory Galaxy (`/gallery`)**:
   - Interactive photograph gallery featuring real photos of Sayali and the couple.
   - Categorized by: *Best Moments*, *Beautiful Smiles*, *Favorite Photos*, *Funny Memories*, *Special Days*, and *Unforgettable Moments*.
   - Filter pills, glowing frame cards, and full-screen **Lightbox** viewer with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Esc`).

4. **A Letter for Sayali (`/letter`)**:
   - Floating celestial envelope with a glowing golden wax seal.
   - Touch/click the seal to break it open and reveal an editorial golden letter with warm ambient lighting.
   - Features the complete heartfelt birthday letter.
   - Includes re-seal/replay and close controls.

5. **The Surprise Gift Room (`/gifts`)**:
   - 6 Interactive 3D-styled gift boxes with satin ribbons and golden bows.
   - **Gift 01**: Personal heartfelt birthday message.
   - **Gift 02**: Radiant starlight portrait in glowing frame (`sayali_glamour.jpg`).
   - **Gift 03**: Treasured festive milestone memory (`couple_traditional.jpg`).
   - **Gift 04**: Interactive "Galaxy of Smiles" (reasons you make my universe smile).
   - **Gift 05**: Animated birthday greeting with celebratory golden & pink confetti burst.
   - **Gift 06**: The Grand Finale gift with loving vow, photo, and universe reveal.

6. **Our Special Moments (`/moments`)**:
   - Cinematic crossfading slideshow with automatic playback.
   - Configurable playback speed (3s, 4.5s, 6s, 8s).
   - Pause / Resume, Previous / Next controls, step dots, and full-screen presentation mode.
   - Celebratory ending message after the final photograph.

7. **The Grand Birthday Finale (`/finale`)**:
   - Celestial planet landscape with floating rose petals and glowing birthday cake.
   - Interactive candles that can be blown out!
   - **"Make a Wish ✨"** button that unleashes a sparkling double confetti burst.
   - Displays: *"Today, the Whole Universe Celebrates You."* & *"Happy Birthday, Sayali! ❤️"*
   - Concludes with the blessing: *"May your world always be filled with happiness, beautiful memories, and endless possibilities."*

---

## 🎵 Cosmic Audio System

- Includes a built-in **Web Audio Synthesizer** that automatically generates soothing celestial chords, gentle piano notes, and warm bell chimes without needing external audio files.
- **Custom Soundtrack Support**: Drop an MP3 file into `public/audio/universe.mp3`, and the player will automatically detect and play your custom audio!
- Controls: Play / Pause, Mute / Unmute, Volume slider, animated sound wave visualizer.
- Persistent playback state across all internal route changes.

---

## 🛠️ Personalization & Customization

All website text and personal details can be edited from central TypeScript files in `src/data/`:

| File | What to Edit |
|---|---|
| `src/data/siteConfig.ts` | Recipient name, birthday date, homepage text, love letter text, finale blessing, audio settings |
| `src/data/memories.ts` | Photo titles, categories, dates, captions, and image paths |
| `src/data/story.ts` | The 7 relationship milestones, milestone dates, captions, personal messages, reflections |
| `src/data/gifts.ts` | The 6 surprise gift box contents, reasons to smile, messages |

### Adding More Personal Photographs:
1. Place your `.jpg` or `.png` images in `public/images/memories/`.
2. Reference them in `src/data/memories.ts` or `src/data/siteConfig.ts`.

---

## 🚀 How to Run Locally

### Requirements
- Node.js (v18 or higher)
- npm

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Visit `http://localhost:3000` (or the port indicated in your terminal) to explore the universe!

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 📦 Project Structure

```
Sayali_Birthday_Universe/
├── public/
│   ├── images/
│   │   └── memories/          # Real photographs of Sayali and the couple
│   ├── audio/                 # Place custom MP3 soundtracks here
│   └── models/                # 3D assets directory
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navbar with audio player
│   │   ├── AudioPlayer.tsx    # Celestial synth & MP3 audio player
│   │   ├── CosmicBackground.tsx # Interactive canvas starfield & nebulas
│   │   ├── FairyLights.tsx    # Hanging glowing starlight garland
│   │   ├── ConstellationCanvas.tsx # Connecting star constellation canvas
│   │   ├── Lightbox.tsx       # Full-screen photo lightbox
│   │   ├── PageHeader.tsx     # Cinematic editorial header
│   │   └── Footer.tsx         # Cosmic footer with quick links
│   ├── data/
│   │   ├── siteConfig.ts      # Names, greeting, letter, finale text
│   │   ├── memories.ts        # Photo gallery data
│   │   ├── story.ts           # 7 Timeline milestones
│   │   └── gifts.ts           # 6 Surprise gifts data
│   ├── pages/
│   │   ├── Home.tsx           # Page 1: Cinematic Home
│   │   ├── LoveStory.tsx      # Page 2: Our Love Story
│   │   ├── MemoryGalaxy.tsx   # Page 3: Our Memory Galaxy
│   │   ├── LoveLetter.tsx     # Page 4: A Letter for Sayali
│   │   ├── GiftRoom.tsx       # Page 5: The Surprise Gift Room
│   │   ├── SpecialMoments.tsx # Page 6: Our Special Moments
│   │   ├── Finale.tsx         # Page 7: The Grand Birthday Finale
│   │   └── NotFound.tsx       # Custom 404 Cosmic Error Page
│   ├── styles/
│   │   ├── global.css         # Cosmic design system & glassmorphism
│   │   └── animations.css     # Keyframes for twinkles, shooting stars, sway
│   ├── utils/
│   │   └── confetti.ts        # Standalone cosmic celebratory confetti
│   ├── App.tsx                # Routing and layout
│   └── main.tsx               # Root entry
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

*Made with love for Sayali's Birthday. Forever your brightest star in the universe.* ❤️
