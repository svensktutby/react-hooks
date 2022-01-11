import { MutableRefObject, useEffect, useRef } from 'react';

type HTMLElementProps<T> = {
    ref: MutableRefObject<T | null>;
    style: Record<string, unknown>;
};

export const useFadeIn = <T extends HTMLElement>(duration = 1, delay = 0): HTMLElementProps<T> => {
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        if (elementRef.current) {
            const { current } = elementRef;

            current.style.opacity = String(1);
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        }
    }, [duration, delay]);

    return { ref: elementRef, style: { opacity: 0 } };
};
