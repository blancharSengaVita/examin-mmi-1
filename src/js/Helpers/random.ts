export function random(min: number = 0, max: number = 100): number {
    return Math.floor(min + Math.random() * (max - min));
}