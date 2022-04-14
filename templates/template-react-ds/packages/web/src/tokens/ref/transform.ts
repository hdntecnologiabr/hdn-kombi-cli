export const transformScaleRefs = {
  'scale-ref-5': 'scale(1.05)',
  'scale-ref-25': 'scale(1.25)',
  'scale-ref-50': 'scale(1.50)',
};

export const transformRotationRefs = {
  'rotation-ref-quarter': 'rotate(90deg)',
  'rotation-ref-half': 'rotate(180deg)',
  'rotation-ref-full': 'rotate(360deg)',
  'rotation-ref-inverse-quarter': 'rotate(-90deg)',
  'rotation-ref-inverse-half': 'rotate(-180deg)',
  'rotation-ref-inverse-full': 'rotate(-360deg)',
};

export const transform = {
  ...transformScaleRefs,
  ...transformRotationRefs,
};
