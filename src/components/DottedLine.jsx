export default function DottedLine({ direction = 'horizontal', length = 80, size = 4, gap = 8, color = '#B9FF66' }) {
  const isHorizontal = direction === 'horizontal';
  const dotCount = Math.floor(length / (size + gap));

  return (
    <div
      className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} items-center justify-center`}
      style={{
        width:  isHorizontal ? `${length}px` : `${size}px`,
        height: isHorizontal ? `${size}px` : `${length}px`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: dotCount }).map((_, i) => (
        <div
          key={i}
          style={{
            width:  `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}