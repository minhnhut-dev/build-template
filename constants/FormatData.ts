export function formatNumberShort(n: number): string {
  if (n >= 1000) {
    return (n / 1000).toString().replace(/\.0$/, '') + 'k';
  }
  return n.toString();
}