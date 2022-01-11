import React, { FC } from 'react';
import usePreventLeave from './hooks/usePreventLeave';

export const App: FC = () => {
    const { disablePrevent, enablePrevent } = usePreventLeave();

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};
