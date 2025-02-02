export const calculateSizes = (isSmall, isMedium, isLarge) => {
  return {
    dioramaScale: isSmall ? 0.6 : isMedium ? 0.7 : 0.8,
    dioramaPosition: isMedium ? [0, -1.2, 0] : [0, -1, 0],
    birdsScale: isMedium ? [0.5, -4.5, 0] : [0.25, -3.0, 0], 
    birdsPosition: isSmall ? 0.05 : isMedium ? 0.06 : 0.035,
  }
};
