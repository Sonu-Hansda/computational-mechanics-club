export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const scaleSpring = {
  whileHover: { scale: 1.05 },
  whileTap:   { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};