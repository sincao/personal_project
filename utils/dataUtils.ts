export const generateRandomEmail = (): string => {
    const timestamp = Date.now();
    return `user${timestamp}@test.com`;
};

export function getRandomDay(): number {
  return Math.floor(Math.random() * 31) + 1;
}

export function getRandomMonth(): number {
  return Math.floor(Math.random() * 12) + 1;
}

export function getRandomYear(): number {
  return Math.floor(Math.random() * (2005 - 1950 + 1)) + 1950;
}