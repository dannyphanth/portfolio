"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
    src: string;
    width?: number;
    height?: number;
    className?: string;
    poster?: string;
}

export default function LazyVideo({
    src,
    width = 720,
    height = 405,
    className = "",
    poster
}: LazyVideoProps) {
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsInView(true);
          setIsLoaded(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoaded]);

    return (
        <div ref={videoRef} className={`my-4 ${className}`}>
            {isInView ? (
                <video
                    width={width}
                    height={height}
                    className="rounded-md border bg-muted transition-colors"
                    controls
                    preload="metadata"
                    poster={poster}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div
                    className="rounded-md border bg-muted transition-colors flex items-center justify-center"
                    style={{ width, height }}
                >
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">Loading video...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
