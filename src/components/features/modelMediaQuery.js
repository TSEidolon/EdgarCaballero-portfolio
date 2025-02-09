export const calculateSizes = (isSmall, isMedium, isLarge) => {
  return {
    dioramaScale: isSmall ? 0.6 : isMedium ? 0.7 : 0.8,
    dioramaPosition: isMedium ? [0, -1.2, 0] : [0, -1, 0],
    birdsScale: isSmall ? .50 : isMedium ? .7 :isLarge ? .7 : 1.2,
    birdsPosition: isMedium ? [-.2, -1.7 , 0] : isLarge? [1.5, 0, 0] : [1.35, 0, 0], 
  }
};

