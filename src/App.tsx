import React, { FC } from 'react';
import useClick from './hooks/useClick';

export const App: FC = () => {
    const onClick = () => console.log('Click on Title');
    const titleRef = useClick<HTMLHeadingElement>(onClick);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <h1 ref={titleRef}>Title</h1>
        </div>
    );
};
