import React, { FC } from 'react';
import useBeforeLeave from './hooks/useBeforeLeave';

export const App: FC = () => {
    const callback = () => {
        confirm('Do you really want to leave the site');
    };

    useBeforeLeave(callback);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            App
        </div>
    );
};
