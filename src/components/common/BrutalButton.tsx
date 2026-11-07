'use client';

import React from 'react';
import { sound } from '@/lib/audio';

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  soundType?: 'pop' | 'chime' | 'success';
}

export default function BrutalButton({
  variant = 'primary',
  size = 'md',
  children,
  soundType = 'pop',
  className = '',
  onClick,
  disabled,
  ...props
}: BrutalButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (soundType === 'pop') sound.playBubblePop();
    else if (soundType === 'chime') sound.playChime();
    else if (soundType === 'success') sound.playSuccess();

    if (onClick) onClick(e);
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-pixel font-bold tracking-wide rounded-xl border-[3px] border-ink transition-all duration-100 select-none cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm shadow-brutal-sm',
    md: 'px-5 py-2.5 text-base shadow-brutal',
    lg: 'px-7 py-3.5 text-lg shadow-brutal-lg',
  }[size];

  const variantStyles = {
    primary: 'bg-yuzu hover:bg-yuzu-gold text-ink',
    secondary: 'bg-onsen hover:bg-onsen-deep text-white',
    accent: 'bg-matcha hover:bg-matcha-dark text-white',
    outline: 'bg-snow hover:bg-cream text-ink',
  }[variant];

  return (
    <button
      {...props}
      disabled={disabled}
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
