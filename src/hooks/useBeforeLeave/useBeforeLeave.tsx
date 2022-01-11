import { useEffect } from 'react';

export const useBeforeLeave = (onBefore: () => void) => {
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            const { clientY } = event;
            if (clientY <= 0) onBefore();
        };

        document.addEventListener('mouseleave', handler);
        return () => {
            document.removeEventListener('mouseleave', handler);
        };
    }, [onBefore]);
};
