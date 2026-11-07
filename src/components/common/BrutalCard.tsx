'use client';

import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  headerBg?: string;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function BrutalCard({
  children,
  header,
  headerBg = 'bg-sand',
  className = '',
  hoverable = false,
  onClick,
}: BrutalCardProps) {
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      onClick={onClick}
      className={`rounded-2xl border-[3px] border-ink bg-snow overflow-hidden shadow-brutal transition-all duration-150 ${
        hoverable ? 'hover:-translate-y-1 hover:shadow-brutal-lg cursor-pointer' : ''
      } ${className}`}
    >
      {header && (
        <div className={`px-5 py-3 border-b-[3px] border-ink font-pixel font-bold text-ink ${headerBg}`}>
          {header}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
