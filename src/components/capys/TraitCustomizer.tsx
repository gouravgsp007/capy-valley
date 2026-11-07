'use client';

import React, { useState } from 'react';
import CapyPixelRenderer from '../canvas/CapyPixelRenderer';
import BrutalButton from '../common/BrutalButton';
import PixelBadge from '../common/PixelBadge';
import { sound } from '@/lib/audio';
import { Dices, Sparkles } from 'lucide-react';

export default function TraitCustomizer() {
  const [head, setHead] = useState<string>('yuzu');
  const [expression, setExpression] = useState<string>('zen');
  const [bodyColor, setBodyColor] = useState<string>('#BA8C63');
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const headOptions = [
    { id: 'yuzu', label: '🍊 Golden Yuzu' },
    { id: 'towel', label: '♨️ Spa Towel' },
    { id: 'frog', label: '🐸 Frog Hat' },
    { id: 'flower', label: '🌸 Sakura Bloom' },
  ];

  const expressionOptions = [
    { id: 'zen', label: '😌 Zen Sleepy' },
    { id: 'star', label: '✨ Star Eyes' },
    { id: 'munch', label: '🌿 Munching Leaf' },
    { id: 'shades', label: '😎 Cool Shades' },
  ];

  const colorOptions = [
    { color: '#BA8C63', label: 'Classic Capy' },
    { color: '#D4A373', label: 'Golden Honey' },
    { color: '#8A9A5B', label: 'Matcha Herb' },
    { color: '#B5A8D5', label: 'Lavender Mist' },
  ];

  const handleRandomize = () => {
    sound.playBubblePop();
    setIsRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      const randomHead = headOptions[Math.floor(Math.random() * headOptions.length)].id;
      const randomExpr = expressionOptions[Math.floor(Math.random() * expressionOptions.length)].id;
      const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)].color;

      setHead(randomHead);
      setExpression(randomExpr);
      setBodyColor(randomColor);

      count++;
      if (count > 7) {
        clearInterval(interval);
        setIsRolling(false);
        sound.playChime();
      }
    }, 90);
  };

  return (
    <div className="bg-snow p-6 sm:p-8 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b-[2.5px] border-ink mb-6">
        <div>
          <PixelBadge variant="yuzu" size="sm">
            DYNAMIC COMPANION LAB
          </PixelBadge>
          <h3 className="font-pixel text-2xl font-bold text-ink mt-1">
            Customize Your Baby Capy
          </h3>
        </div>

        <BrutalButton
          variant="primary"
          size="sm"
          onClick={handleRandomize}
          disabled={isRolling}
          soundType="chime"
          className="gap-2"
        >
          <Dices className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
          Randomize Trait Roll
        </BrutalButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Preview Viewport */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="w-full aspect-square max-w-[280px] rounded-2xl bg-gradient-to-b from-onsen-light to-[#FDECC4] border-[3px] border-ink shadow-brutal flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-snow px-2 py-0.5 rounded border border-ink font-pixel text-xs font-bold text-ink/70">
              Lv. 1 Sprout
            </div>
            <div className="animate-bob">
              <CapyPixelRenderer
                head={head}
                expression={expression}
                bodyColor={bodyColor}
                size={210}
                inWater={true}
              />
            </div>
          </div>
          <span className="font-pixel text-xs text-ink/60 mt-3 flex items-center gap-1 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-yuzu" />
            Evolving on-chain metadata
          </span>
        </div>

        {/* Customization Selectors */}
        <div className="md:col-span-7 space-y-5">
          {/* Headgear */}
          <div>
            <label className="block font-pixel text-xs font-bold text-ink/70 uppercase mb-2">
              Headgear & Spa Accessories:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {headOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    sound.playBubblePop();
                    setHead(opt.id);
                  }}
                  className={`px-3 py-2 rounded-xl font-pixel text-xs font-bold border-[2px] border-ink transition-all cursor-pointer ${
                    head === opt.id
                      ? 'bg-yuzu text-ink shadow-brutal-sm -translate-y-0.5'
                      : 'bg-cream text-ink/80 hover:bg-sand/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Expression */}
          <div>
            <label className="block font-pixel text-xs font-bold text-ink/70 uppercase mb-2">
              Mood & Expression:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {expressionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    sound.playBubblePop();
                    setExpression(opt.id);
                  }}
                  className={`px-3 py-2 rounded-xl font-pixel text-xs font-bold border-[2px] border-ink transition-all cursor-pointer ${
                    expression === opt.id
                      ? 'bg-onsen text-white shadow-brutal-sm -translate-y-0.5'
                      : 'bg-cream text-ink/80 hover:bg-sand/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Body Color */}
          <div>
            <label className="block font-pixel text-xs font-bold text-ink/70 uppercase mb-2">
              Fur Coat:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((opt) => (
                <button
                  key={opt.color}
                  onClick={() => {
                    sound.playBubblePop();
                    setBodyColor(opt.color);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl font-pixel text-xs font-bold border-[2px] border-ink transition-all cursor-pointer ${
                    bodyColor === opt.color
                      ? 'bg-matcha text-white shadow-brutal-sm -translate-y-0.5'
                      : 'bg-cream text-ink/80 hover:bg-sand/50'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-ink"
                    style={{ backgroundColor: opt.color }}
                  />
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
