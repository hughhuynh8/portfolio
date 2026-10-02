import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { SPACE_LOGOS } from '../config/navigation';
import { preloadImage } from '../utils/preloadImage';

export function MobileSectorsMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const animations = useRef<Animation[]>([]);
  const expandedRef = useRef(false);
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = useCallback((open: boolean, immediate = false) => {
    const menu = menuRef.current;
    const panel = panelRef.current;
    const links = linksRef.current;
    if (!menu || !panel || !links) return;
    expandedRef.current = open;
    setExpanded(open);
    if (!open && panel.contains(document.activeElement)) menu.querySelector('summary')?.focus();
    panel.inert = true;

    if (immediate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animations.current.forEach((animation) => animation.cancel());
      animations.current = [];
      menu.open = open;
      panel.inert = !open;
      return;
    }
    if (!open && !menu.open) return;
    menu.open = true;

    if (!animations.current.length) {
      const options: KeyframeAnimationOptions = { duration: 560, fill: 'both', easing: 'linear' };
      const panelAnimation = panel.animate([
        { clipPath: 'inset(0 calc(100% - 8px) calc(100% - 1px) 0)', backgroundColor: '#06b6d4', offset: 0 },
        { clipPath: 'inset(0 0 calc(100% - 1px) 0)', backgroundColor: '#06b6d4', offset: 0.42 },
        { clipPath: 'inset(0)', backgroundColor: '#011215', offset: 1 },
      ], options);
      const contentAnimation = links.animate([
        { opacity: 0, offset: 0 },
        { opacity: 0, offset: 0.42 },
        { opacity: 1, offset: 0.75 },
        { opacity: 1, offset: 1 },
      ], options);
      animations.current = [panelAnimation, contentAnimation];
      panelAnimation.onfinish = () => {
        if (expandedRef.current) {
          panel.inert = false;
        } else {
          menu.open = false;
          animations.current.forEach((animation) => animation.cancel());
          animations.current = [];
        }
      };
    }
    // Reverse the current timeline, including when a click interrupts a transition.
    animations.current.forEach((animation) => {
      animation.updatePlaybackRate(open ? 1 : -1);
      animation.play();
    });
  }, []);

  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (expandedRef.current && !menuRef.current?.contains(event.target as Node)) toggleMenu(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedRef.current) {
        toggleMenu(false);
        menuRef.current?.querySelector('summary')?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (desktop.matches) toggleMenu(false, true);
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
      animations.current.forEach((animation) => animation.cancel());
      animations.current = [];
    };
  }, [toggleMenu]);

  return (
    <details ref={menuRef} data-expanded={expanded} className="mobile-sectors relative mt-1 md:hidden"
      onBlur={(event) => {
        // A touch tap can blur the summary without focusing the link on iOS.
        // Keep the panel active until the link's click or an outside pointerdown.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) toggleMenu(false);
      }}>
      <summary
        aria-label="Navigation menu"
        aria-expanded={expanded}
        aria-controls="mobile-sectors-panel"
        onClick={(event) => {
          event.preventDefault();
          toggleMenu(!expandedRef.current);
        }}
        onKeyDown={(event) => {
          // Reveal the links before Tab enters them, even during the opening animation.
          if (event.key === 'Tab' && !event.shiftKey && expandedRef.current) toggleMenu(true, true);
        }}
        className="flex w-fit min-h-11 cursor-pointer items-center gap-2.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold tracking-wider transition-colors duration-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
        <Menu className="sectors-burger h-5 w-5" aria-hidden="true" />
        <X className="sectors-close h-5 w-5" aria-hidden="true" />
      </summary>
      <nav ref={panelRef} id="mobile-sectors-panel" aria-label="Mobile navigation" className="mobile-sectors-panel">
        <div ref={linksRef} className="mobile-sectors-links flex flex-col gap-1 p-2">
          <NavLink
            to="/"
            end
            onClick={() => {
              toggleMenu(false);
              menuRef.current?.querySelector('summary')?.focus();
            }}
            className={({ isActive }) => `flex min-h-12 items-center gap-3 rounded-lg border px-3 py-2 text-sm font-mono transition-colors ${isActive
              ? 'border-cyan-400/60 bg-cyan-500/20 text-cyan-200'
              : 'border-transparent text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/20'}`}
          >
            <span className="flex h-8 w-16 shrink-0 items-center justify-center rounded border border-cyan-400/30 bg-cyan-500/10 px-2">
              <Home className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            </span>
            <span>HOME</span>
          </NavLink>
          {SPACE_LOGOS.map((logo) => (
            <NavLink
              key={logo.id}
              to={`/${logo.id}`}
              onClick={() => {
                toggleMenu(false);
                menuRef.current?.querySelector('summary')?.focus();
              }}
              onPointerEnter={() => preloadImage(logo.heroImage)}
              onFocus={() => preloadImage(logo.heroImage)}
              className={({ isActive }) => `flex min-h-12 items-center gap-3 rounded-lg border px-3 py-2 text-sm font-mono transition-colors ${isActive
                ? 'border-cyan-400/60 bg-cyan-500/20 text-cyan-200'
                : 'border-transparent text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/20'}`}
            >
              <span className="flex h-8 w-16 shrink-0 items-center justify-center rounded px-2" style={{ backgroundColor: logo.backgroundColor }}>
                <img src={logo.icon} alt="" className="max-h-6 max-w-full object-contain" />
              </span>
              <span>{logo.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </details>
  );
}
