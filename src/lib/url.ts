export function buildSearchParams(
  params: Record<string, string | number | boolean | undefined>,
): string {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      sp.set(key, String(value));
    }
  });
  return sp.toString();
}

export function parseSearchParams(
  search: string,
): Record<string, string | null> {
  const sp = new URLSearchParams(search);
  const result: Record<string, string | null> = {};
  sp.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

export function buildUrl(
  path: string,
  params?: Record<string, string | number | boolean | undefined>,
): string {
  if (!params) return path;
  const query = buildSearchParams(params);
  return query ? `${path}?${query}` : path;
}