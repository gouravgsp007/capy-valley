'use client';

import React from 'react';

interface CapyRendererProps {
  head?: string;
  expression?: string;
  bodyColor?: string;
  size?: number;
  className?: string;
  inWater?: boolean;
}

export default function CapyPixelRenderer({
  head = 'yuzu',
  expression = 'zen',
  bodyColor = '#9A6B43',
  size = 180,
  className = '',
  inWater = true,
}: CapyRendererProps) {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full pixel-render drop-shadow-[0_6px_0_rgba(43,35,32,0.35)]"
      >
        {/* Steam Puffs if in water */}
        {inWater && (
          <g className="animate-steam opacity-60">
            <circle cx="28" cy="22" r="4" fill="#FFFFFF" />
            <circle cx="72" cy="18" r="5" fill="#FFFFFF" />
            <circle cx="48" cy="14" r="3" fill="#FFFFFF" />
          </g>
        )}

        {/* Capy Ears */}
        <rect x="24" y="34" width="7" height="9" rx="2" fill="#684323" stroke="#2B2320" strokeWidth="2" />
        <rect x="69" y="34" width="7" height="9" rx="2" fill="#684323" stroke="#2B2320" strokeWidth="2" />

        {/* Capy Head & Main Snout */}
        <rect
          x="28"
          y="36"
          width="44"
          height="40"
          rx="12"
          fill={bodyColor}
          stroke="#2B2320"
          strokeWidth="3"
        />

        {/* Capy Cute Chubby Cheeks / Snout Bottom */}
        <rect
          x="32"
          y="54"
          width="36"
          height="22"
          rx="8"
          fill="#BA8C63"
          stroke="#2B2320"
          strokeWidth="2.5"
        />

        {/* Nostrils */}
        <ellipse cx="44" cy="62" rx="2" ry="3" fill="#2B2320" />
        <ellipse cx="56" cy="62" rx="2" ry="3" fill="#2B2320" />

        {/* Snout Mouth */}
        <path
          d="M 47 66 Q 50 68 53 66"
          stroke="#2B2320"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Blush Cheeks */}
        <circle cx="34" cy="66" r="3.5" fill="#FF8A80" opacity="0.6" />
        <circle cx="66" cy="66" r="3.5" fill="#FF8A80" opacity="0.6" />

        {/* Expressions */}
        {expression === 'zen' && (
          // Zen closed sleepy eyes (- -)
          <g stroke="#2B2320" strokeWidth="2.5" strokeLinecap="round">
            <line x1="36" y1="48" x2="44" y2="48" />
            <line x1="56" y1="48" x2="64" y2="48" />
          </g>
        )}

        {expression === 'star' && (
          // Sparkling star eyes
          <g fill="#FFA502">
            <polygon points="40,43 42,47 46,47 43,49 44,53 40,51 36,53 37,49 34,47 38,47" />
            <polygon points="60,43 62,47 66,47 63,49 64,53 60,51 56,53 57,49 54,47 58,47" />
          </g>
        )}

        {expression === 'munch' && (
          // Chewing yuzu leaf
          <g>
            <g stroke="#2B2320" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 36 47 Q 40 51 44 47" fill="none" />
              <path d="M 56 47 Q 60 51 64 47" fill="none" />
            </g>
            {/* Yuzu leaf sticking out */}
            <path d="M 53 66 C 60 68 64 63 68 64 C 64 68 59 70 53 67 Z" fill="#2ED573" stroke="#2B2320" strokeWidth="1.5" />
          </g>
        )}

        {expression === 'shades' && (
          // Cool retro pixel sunglasses
          <g fill="#1E272C" stroke="#2B2320" strokeWidth="1.5">
            <rect x="33" y="44" width="14" height="9" rx="2" />
            <rect x="53" y="44" width="14" height="9" rx="2" />
            <line x1="47" y1="47" x2="53" y2="47" stroke="#2B2320" strokeWidth="2" />
            {/* Lens Glare */}
            <line x1="35" y1="46" x2="39" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="55" y1="46" x2="59" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
        )}

        {/* Head Accessories */}
        {head === 'yuzu' && (
          // Classic Hot Spring Yuzu on top of head
          <g>
            <circle cx="50" cy="30" r="8" fill="#FFA502" stroke="#2B2320" strokeWidth="2" />
            <ellipse cx="50" cy="23" rx="3" ry="1.5" fill="#2ED573" stroke="#2B2320" strokeWidth="1" />
            <circle cx="52" cy="28" r="1.5" fill="#FFF" opacity="0.6" />
          </g>
        )}

        {head === 'towel' && (
          // Folded onsen spa towel
          <g>
            <rect x="36" y="27" width="28" height="9" rx="3" fill="#FFFFFF" stroke="#2B2320" strokeWidth="2" />
            <line x1="42" y1="27" x2="42" y2="36" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="50" y1="27" x2="50" y2="36" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="58" y1="27" x2="58" y2="36" stroke="#E0E0E0" strokeWidth="1" />
          </g>
        )}

        {head === 'frog' && (
          // Cute frog bucket hat
          <g>
            <ellipse cx="50" cy="32" rx="20" ry="7" fill="#6BCB77" stroke="#2B2320" strokeWidth="2" />
            <rect x="38" y="24" width="24" height="10" rx="4" fill="#6BCB77" stroke="#2B2320" strokeWidth="2" />
            {/* Frog Eyes */}
            <circle cx="42" cy="22" r="4" fill="#FFFFFF" stroke="#2B2320" strokeWidth="1.5" />
            <circle cx="42" cy="22" r="1.5" fill="#2B2320" />
            <circle cx="58" cy="22" r="4" fill="#FFFFFF" stroke="#2B2320" strokeWidth="1.5" />
            <circle cx="58" cy="22" r="1.5" fill="#2B2320" />
          </g>
        )}

        {head === 'flower' && (
          // Pink Sakura Blossom
          <g transform="translate(56, 27) scale(0.9)">
            <circle cx="-6" cy="0" r="4" fill="#FF85A1" />
            <circle cx="6" cy="0" r="4" fill="#FF85A1" />
            <circle cx="0" cy="-6" r="4" fill="#FF85A1" />
            <circle cx="0" cy="6" r="4" fill="#FF85A1" />
            <circle cx="0" cy="0" r="3" fill="#FFF275" stroke="#2B2320" strokeWidth="1" />
          </g>
        )}

        {/* Water Ripple Layer at base */}
        {inWater && (
          <g>
            <ellipse cx="50" cy="78" rx="40" ry="9" fill="#4EA8DE" opacity="0.6" stroke="#2B2320" strokeWidth="2" />
            <ellipse cx="50" cy="80" rx="30" ry="6" fill="#74C0FC" opacity="0.4" />
          </g>
        )}
      </svg>
    </div>
  );
}
