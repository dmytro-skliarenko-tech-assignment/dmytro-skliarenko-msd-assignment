export function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
export function getRandomGreenColor(): string {
    return `rgba(0, 122, 106, ${getRandomArbitrary(0.2, 1)})`;
}
