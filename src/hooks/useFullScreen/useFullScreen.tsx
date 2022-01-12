import { useRef } from 'react';

export const useFullScreen = <T extends HTMLElement, U>(callback: U) => {
    const elementRef = useRef<T | null>(null);
    const runCallback = (isFullScreen: boolean) => {
        if (callback && typeof callback === 'function') {
            callback(isFullScreen);
        }
    };
    const setFullScreen = () => {
        if (elementRef.current) {
            if (elementRef.current.requestFullscreen) {
                elementRef.current.requestFullscreen();
                // @ts-ignore
            } else if (elementRef.current.mozRequestFullScreen) {
                // @ts-ignore
                elementRef.current.mozRequestFullScreen();
                // @ts-ignore
            } else if (elementRef.current.webkitRequestFullscreen) {
                // @ts-ignore
                elementRef.current.webkitRequestFullscreen();
                // @ts-ignore
            } else if (elementRef.current.msRequestFullscreen) {
                // @ts-ignore
                elementRef.current.msRequestFullscreen();
            }
        }
        runCallback(true);
    };
    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // @ts-ignore
        } else if (document.mozCancelFullScreen) {
            // @ts-ignore
            document.mozCancelFullScreen();
            // @ts-ignore
        } else if (document.webkitExitFullscreen) {
            // @ts-ignore
            document.webkitExitFullscreen();
            // @ts-ignore
        } else if (document.msExitFullscreen) {
            // @ts-ignore
            document.msExitFullscreen();
        }
        runCallback(false);
    };

    return { elementRef, setFullScreen, exitFullScreen };
};
