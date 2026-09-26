const images = new Map<string, HTMLImageElement>();

/** Warm the browser cache when a visitor shows intent to open a project. */
export function preloadImage(src?: string) {
  if (!src || images.has(src)) return;

  const image = new Image();
  images.set(src, image);
  image.src = src;
  // Decode ahead of navigation; failed requests may be retried next time.
  void image.decode().catch(() => {
    images.delete(src);
  });
}
