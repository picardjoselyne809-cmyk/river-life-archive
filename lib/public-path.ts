export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function publicPath(path: string) {
  if (!path.startsWith('/')) return path;
  return `${publicBasePath}${path}`;
}

export function appHref(path: string) {
  if (!path.startsWith('/')) return path;
  return `${publicBasePath}${path}`;
}
