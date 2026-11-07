'use client';

import React, { useState } from 'react';
import PixelBadge from '../common/PixelBadge';
import { FAQ_ITEMS } from '@/lib/constants';
import { sound } from '@/lib/audio';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'gameplay', label: 'Gameplay' },
    { id: 'vault', label: 'Public Vault' },
    { id: 'capys', label: 'Baby Capys' },
    { id: 'tokenomics', label: 'Tokenomics' },
  ];

  const filteredItems = FAQ_ITEMS.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const toggleItem = (idx: number) => {
    sound.playBubblePop();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <PixelBadge variant="onsen" size="md">
            GOT QUESTIONS?
          </PixelBadge>
          <h2 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Frequently Asked Questions
          </h2>
          <p className="font-cozy text-ink/80 text-base">
            Everything you need to know about the valley, dynamic Baby Capys, and the $CAPY reward vault.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playBubblePop();
                  setSelectedCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`font-pixel text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl border-[2px] border-ink transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-yuzu text-ink shadow-brutal-sm -translate-y-0.5'
                    : 'bg-snow text-ink/70 hover:bg-sand/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="bg-snow rounded-2xl border-[3px] border-ink shadow-brutal overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-pixel font-bold text-lg text-ink cursor-pointer hover:bg-cream/50 transition-colors"
                >
                  <span>{item.question}</span>
                  <div className="w-8 h-8 rounded-lg bg-sand border-[2px] border-ink flex items-center justify-center shrink-0 shadow-brutal-sm">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-ink" />
                    ) : (
                      <Plus className="w-4 h-4 text-ink" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 font-cozy text-ink/80 text-base leading-relaxed border-t-[2px] border-ink/10 bg-cream/30">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
