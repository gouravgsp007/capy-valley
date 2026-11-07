'use client';

import React from 'react';
import { SocialTask } from '@/lib/types';
import { sound } from '@/lib/audio';
import { CheckCircle, ExternalLink, Circle } from 'lucide-react';

interface SocialChecklistProps {
  tasks: SocialTask[];
  onToggleTask: (id: string) => void;
}

export default function SocialChecklist({ tasks, onToggleTask }: SocialChecklistProps) {
  const handleTaskClick = (task: SocialTask) => {
    if (!task.completed) {
      sound.playBubblePop();
      if (task.link && task.link !== '#') {
        window.open(task.link, '_blank', 'noopener,noreferrer');
      }
    }
    onToggleTask(task.id);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="font-pixel text-xs font-bold text-ink/70 uppercase">
          Step 1: Complete Community Rituals
        </label>
        <span className="font-pixel text-xs font-bold text-matcha">
          {tasks.filter((t) => t.completed).length} of {tasks.length} Done
        </span>
      </div>

      <div className="space-y-2.5">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => handleTaskClick(task)}
            className={`p-3.5 rounded-xl border-[2px] border-ink transition-all cursor-pointer flex items-center justify-between gap-3 ${
              task.completed
                ? 'bg-matcha-light text-ink shadow-brutal-sm'
                : 'bg-snow hover:bg-cream text-ink'
            }`}
          >
            <div className="flex items-center gap-3">
              {task.completed ? (
                <CheckCircle className="w-5 h-5 text-matcha shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-ink/30 shrink-0" />
              )}
              <div>
                <div className="font-pixel text-sm font-bold leading-tight">
                  {task.label}
                </div>
                <div className="font-cozy text-xs text-ink/70">
                  {task.description}
                </div>
              </div>
            </div>

            <span className="shrink-0 p-1 rounded hover:bg-sand/60 text-ink/60">
              <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
