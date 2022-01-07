import React, { FC } from 'react';
import useHover from './hooks/useHover';

export const App: FC = () => {
    const onHover = () => console.log('Hover on Title');
    const titleRef = useHover<HTMLHeadingElement>(onHover);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <h1 ref={titleRef}>Title</h1>
        </div>
    );
};
