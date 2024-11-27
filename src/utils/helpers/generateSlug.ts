export function generateSlug(title: string): string {
  return encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
}
