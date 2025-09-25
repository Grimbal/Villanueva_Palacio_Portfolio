// src/hooks/useAnimateOnScroll.ts

import { useRef, useEffect, useState } from 'react';

export const useAnimateOnScroll = (threshold: number = 0.1, unobserveAfterVisible: boolean = true) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting && unobserveAfterVisible) {
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, unobserveAfterVisible]);

    return { ref, isVisible };
};