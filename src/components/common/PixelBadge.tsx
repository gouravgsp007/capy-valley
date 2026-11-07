import React from 'react';

interface PixelBadgeProps {
  children: React.ReactNode;
  variant?: 'yuzu' | 'onsen' | 'matcha' | 'coral' | 'snow';
  size?: 'sm' | 'md';
  className?: string;
}

export default function PixelBadge({
  children,
  variant = 'yuzu',
  size = 'md',
  className = '',
}: PixelBadgeProps) {
  const variantStyles = {
    yuzu: 'bg-yuzu text-ink border-ink',
    onsen: 'bg-onsen text-white border-ink',
    matcha: 'bg-matcha text-white border-ink',
    coral: 'bg-[#FF7675] text-white border-ink',
    snow: 'bg-snow text-ink border-ink',
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 border-[2px]',
    md: 'text-sm px-3.5 py-1 border-[2.5px]',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-pixel font-bold rounded-lg shadow-brutal-sm select-none uppercase tracking-wider ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
