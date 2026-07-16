export function scrollScrubTime(
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
  duration: number,
): number {
  const scrollDistance = Math.max(sectionHeight - viewportHeight, viewportHeight)
  const progress = Math.min(1, Math.max(0, -sectionTop / scrollDistance))

  return progress * duration
}
