export const generateRandomEmail = (): string => {
    const timestamp = Date.now();
    return `user${timestamp}@test.com`;
  };