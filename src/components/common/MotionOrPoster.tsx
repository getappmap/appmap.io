import { useEffect, useState } from "react";

type Props = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

/**
 * Renders an autoplaying muted loop video, or the static poster when the
 * user prefers reduced motion or is on a narrow viewport (saves data + battery).
 */
export function MotionOrPoster({ src, poster, alt, className, width, height }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 640px)").matches;
    if (!reducedMotion && !narrow) setShowVideo(true);
  }, []);

  if (!showVideo) {
    return (
      <img
        src={poster}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <video
      className={className}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={alt}
      width={width}
      height={height}
    >
      <source src={src} type="video/mp4" />
      <img src={poster} alt={alt} />
    </video>
  );
}