import { useEffect, useRef, useState } from 'react';

class SoundManager {
  private ctx: AudioContext | null = null;
  private initialized = false;

  public init = () => {
    if (this.initialized) return;
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  };

  public playHover = () => {
    if (!this.ctx || !this.initialized) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      // Soft, high-pitched tick for hover
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.03);
      
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime); // Very low volume
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {
      // Ignore
    }
  };

  public playClick = () => {
    if (!this.ctx || !this.initialized) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      // Satisfying pop for click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      // Ignore
    }
  };
}

const soundManager = new SoundManager();

export default function AudioFeedback() {
  const lastHoveredRef = useRef<EventTarget | null>(null);

  useEffect(() => {
    // We need user interaction to initialize AudioContext
    const handleInit = () => {
      soundManager.init();
      // Once initialized, we don't need this listener anymore
      window.removeEventListener('click', handleInit);
      window.removeEventListener('keydown', handleInit);
    };

    window.addEventListener('click', handleInit);
    window.addEventListener('keydown', handleInit);

    const isInteractiveElement = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      
      const tag = target.tagName?.toLowerCase();
      const role = target.getAttribute('role');
      
      if (
        tag === 'a' || 
        tag === 'button' || 
        role === 'button' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('glass-card-hover')
      ) {
        return true;
      }
      return false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Prevent triggering multiple times while moving inside the same element
      if (isInteractiveElement(target)) {
        // Find the closest interactive parent to use as the unique target
        const interactiveTarget = target.closest('a, button, [role="button"], .cursor-pointer, .glass-card-hover') || target;
        
        if (lastHoveredRef.current !== interactiveTarget) {
          soundManager.playHover();
          lastHoveredRef.current = interactiveTarget;
        }
      } else {
        lastHoveredRef.current = null;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        soundManager.playClick();
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleInit);
      window.removeEventListener('keydown', handleInit);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
