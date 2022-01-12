import React, { FC } from 'react';
import useFullScreen from './hooks/useFullScreen';

export const App: FC = () => {
    const onFullScreen = (isFullScreen: boolean) => {
        console.log(isFullScreen ? 'Full Screen' : 'Not Full Screen');
    };
    type UseFullScreenCallback = typeof onFullScreen;

    const { elementRef, setFullScreen, exitFullScreen } = useFullScreen<HTMLDivElement, UseFullScreenCallback>(
        onFullScreen,
    );

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <div ref={elementRef} style={{ position: 'relative' }}>
                <img src={'https://placekitten.com/640/360'} width="100%" alt="" />
                <button type="button" onClick={exitFullScreen} style={{ position: 'absolute', left: 0 }}>
                    Exit Full Screen
                </button>
            </div>
            <button type="button" onClick={setFullScreen}>
                Full Screen
            </button>
        </div>
    );
};
