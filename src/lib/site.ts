export const SITE_URL = "https://appmap.io";

/** Resolve a site-relative path to an absolute production URL. */
export function abs(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
