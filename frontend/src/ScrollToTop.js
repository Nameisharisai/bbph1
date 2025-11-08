import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function findScrollableContainer() {
  const candidates = [];

  // Preferred known containers
  candidates.push(document.getElementById('root'));
  candidates.push(document.querySelector('.App'));
  candidates.push(document.querySelector('main'));

  // Any explicit scroll container markers
  document.querySelectorAll('[data-scroll-container], .scroll-container').forEach((el) => candidates.push(el));

  // Fallbacks
  if (document.scrollingElement) candidates.push(document.scrollingElement);
  candidates.push(document.body);
  candidates.push(document.documentElement);

  const seen = new Set();
  for (const el of candidates) {
    if (!el || seen.has(el)) continue;
    seen.add(el);
    try {
      const style = getComputedStyle(el);
      const overflowY = (style && style.overflowY) || '';
      const isScrollableOverflow = /(auto|scroll|overlay)/.test(overflowY);
      const canScroll = el.scrollHeight > el.clientHeight + 1;
      if (isScrollableOverflow && canScroll) return el;
      // also allow body/document that can scroll even if overflow style isn't explicit
      if ((el === document.body || el === document.documentElement || el === document.scrollingElement) && canScroll) return el;
    } catch (e) {
      // ignore
    }
  }

  // final fallback
  return document.scrollingElement || document.body || document.documentElement || null;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try multiple times: immediate, shortly after, and later to handle animated transitions
    const attempts = [];

    function doScrollOnce() {
      const container = findScrollableContainer();
      if (!container) return false;
      try {
        if (typeof container.scrollTo === 'function') {
          container.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } else {
          container.scrollTop = 0;
        }
        return true;
      } catch (e) {
        return false;
      }
    }

    // immediate attempt
    doScrollOnce();

    // schedule retries
    attempts.push(setTimeout(doScrollOnce, 50));
    attempts.push(setTimeout(doScrollOnce, 250));
    attempts.push(setTimeout(doScrollOnce, 600));

    return () => attempts.forEach((t) => clearTimeout(t));
  }, [pathname]);

  return null;
}
