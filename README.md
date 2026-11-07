# 🍊 Capy Valley: Cozy Idle Onsen & Farm

A cozy, viral, and high-converting Web3 game showcase and whitelist portal inspired by [valley.loculus.xyz](https://valley.loculus.xyz/).

Capy Valley merges neo-brutalist retro pixel art with interactive onsen atmosphere controls, procedural audio effects synthesized on-the-fly via the Web Audio API, dynamic Baby Capy trait customizers, an interactive Farm Power & $CAPY yield simulator, and a complete whitelist registration pipeline with EVM validation and CSV export.

---

## 🌟 Key Features

### 1. The Valley (`/`)
* **Layered Pixel Art Hero**: Animated pixel Capybara in hot spring with floating yuzu fruit, steam puffs, and water ripples.
* **Atmosphere Glow Controls**: Instant toggle between **Sunny Mist (Day)**, **Sunset Amber**, and **Starlight Onsen (Night)**.
* **Game Loop Breakdown**: 4 tactile pillar cards explaining groves, Keepers, 24h public vault harvests, and the Barn lock multiplier.
* **Farm Power Calculator**: Interactive sliders for Capy count, Onsen bath tiers, harvest streak, and token locks with real-time daily and monthly $CAPY projections.
* **Roadmap & FAQ**: 4-phase project roadmap and category-filtered neo-brutalist accordion FAQ.

### 2. Baby Capys Companion Lab (`/capys`)
* **Interactive Trait Customizer**: Real-time accessory customizer (Golden Yuzu, Spa Towel, Frog Hat, Sakura Flower) with randomize trait rolls and audio chimes.
* **Growth Stages**: Visual progression from Pup (4h offline duration) to Sprout, Keeper, and Grand Elder (24h continuous automated harvest).
* **Drop Tiers**: Transparent breakdown of Early Pioneers (Guaranteed Free Claim), Whitelist, and Public mint tiers.

### 3. Whitelist Portal (`/whitelist`)
* **Community Rituals Checklist**: Interactive task tracking for X follow, repost, and Discord/Telegram joins.
* **EVM Wallet Validation**: Real-time address verification (0x + 40 hex characters) with duplicate detection.
* **Valley Pioneer Passport**: Generates a shareable on-chain style passport card with unique Pioneer ID and one-click X sharing.
* **Live Leaderboard & CSV Export**: Real-time registration table with instant CSV export for marketing and raffle draws.

### 4. Zero-Asset Audio Synthesizer
* Synthesizes warm cozy chimes, bubbly water pops, and celebratory fanfares natively through the **Web Audio API** with zero external sound files. Includes persistent mute control.

---

## 🚀 Getting Started

### Prerequisites
* Node.js v18+ or v22+
* npm or pnpm

### Development
```bash
# Navigate to project
cd C:\Users\Gourav\.gemini\antigravity\scratch\capy-valley

# Install dependencies (already installed)
npm install

# Start local dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🎨 Design System
* **Neo-Brutalism**: Thick 3px ink borders (`#2B2320`), warm parchment background (`#FFF9ED`), offset drop-shadows (`4px 4px 0 #2B2320`).
* **Palette**: Golden Yuzu (`#FDCB6E`), Calm Matcha (`#6B8E23`), Warm Onsen Blue (`#4EA8DE`), Coral Amber (`#F77F00`).
* **Typography**: Pixelify Sans for headers and Nunito for UI copy.
