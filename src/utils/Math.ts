export const isNumeric = (str: string) => {
  return !isNaN(+str) && !isNaN(parseFloat(str));
};

export const mathOperations: {
  [key: string]: (a: string, b: string) => number;
} = {
  "+": (a: string, b: string) => +a + +b,
  "-": (a: string, b: string) => +a - +b,
  "/": (a: string, b: string) => +a / +b,
  x: (a: string, b: string) => +a * +b,
};
