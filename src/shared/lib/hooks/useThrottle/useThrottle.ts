import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            const timerId = setTimeout(() => {
                throttleRef.current = false;
                return () => clearTimeout(timerId);
            }, delay);
        }
    }, [callback, delay]);
}
