const pxToRem = (px: number) => {
  const convertedValue = px / 16;
  return `${convertedValue}rem`;
};

export default pxToRem;
