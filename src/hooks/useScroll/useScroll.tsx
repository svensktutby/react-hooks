import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onScroll = () => {
            setScroll({ y: window.scrollY, x: window.scrollX });
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scroll;
};
