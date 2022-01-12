import React, { FC } from 'react';
import useScroll from './hooks/useScroll';

export const App: FC = () => {
    const { y } = useScroll();

    return (
        <div className="app" style={{ width: 600, height: '1000vh', margin: '0 auto' }}>
            <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'green' }}>Title</h1>
        </div>
    );
};
