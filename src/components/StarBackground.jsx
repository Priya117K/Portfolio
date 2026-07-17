import { useMemo } from "react";

const STAR_COUNT = 96;

function StarBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, index) => {
        const size = 1 + ((index * 17) % 24) / 10;

        return {
          id: index,
          left: (index * 37.71) % 100,
          top: (index * 61.37) % 100,
          size,
          opacity: 0.25 + ((index * 13) % 55) / 100,
          delay: -((index * 0.73) % 8),
          duration: 1.4 + ((index * 11) % 16) / 10,
          sparkle: index % 17 === 0,
        };
      }),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020617]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(8,145,178,0.14),_transparent_48%),radial-gradient(ellipse_at_80%_70%,_rgba(30,64,175,0.12),_transparent_42%)]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className={star.sparkle ? "star star--sparkle" : "star"}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--star-opacity": star.opacity,
            "--star-x": `${((star.id * 17) % 60) - 30}px`,
            "--star-y": `${((star.id * 23) % 60) - 30}px`,
            "--star-delay": `${star.delay}s`,
            "--star-duration": `${star.duration}s`,
          }}
        />
      ))}

      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[150px]" />
    </div>
  );
}

export default StarBackground;





