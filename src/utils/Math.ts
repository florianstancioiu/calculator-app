export const parseStringAsMath = (str: string): number => {
  return Function(`'use strict'; return (${str})`)();
};
