export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  '2xl': `(min-width: ${breakpoints['2xl']}px)`,
  smOnly: `(max-width: ${breakpoints.md - 1}px)`,
  mdUp: `(min-width: ${breakpoints.md}px)`,
  mdOnly: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
} as const;

export function isMobile(width: number): boolean {
  return width < breakpoints.md;
}

export function isTablet(width: number): boolean {
  return width >= breakpoints.md && width < breakpoints.lg;
}

export function isDesktop(width: number): boolean {
  return width >= breakpoints.lg;
}