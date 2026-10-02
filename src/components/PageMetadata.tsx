import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getMetadata } from '../config/metadata';

export function PageMetadata() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const { title, description, url } = getMetadata(pathname);
    document.title = title;
    for (const [selector, content] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', url],
    ]) {
      document.querySelector(selector)?.setAttribute('content', content);
    }
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    if (previousPath.current !== pathname) {
      document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
      document.querySelector('main')?.closest('.overflow-y-auto')?.scrollTo(0, 0);
      previousPath.current = pathname;
    }
  }, [pathname]);
  return null;
}
