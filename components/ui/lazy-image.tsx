"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

export default function LazyImage({
    src,
    alt,
    width = 720,
    height = 405,
    className = "",
    priority = false
}: LazyImageProps) {
    const [isInView, setIsInView] = useState(priority);
    const [isLoaded, setIsLoaded] = useState(priority);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority) return;

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

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [isLoaded, priority]);

    return (
        <div ref={imageRef} className={`my-4 ${className}`}>
            {isInView ? (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="rounded-md border bg-muted transition-colors"
                    priority={priority}
                />
            ) : (
                <div
                    className="rounded-md border bg-muted transition-colors flex items-center justify-center animate-pulse"
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
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">Loading image...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
