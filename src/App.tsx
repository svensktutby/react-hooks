import React, { FC } from 'react';
import useTitle from './hooks/useTitle';

export const App: FC = () => {
    const titleUpdater = useTitle('Loading...');
    setTimeout(titleUpdater, 2000, 'Main page');
    return <div className="app" style={{ width: 600, margin: '0 auto' }}></div>;
};
