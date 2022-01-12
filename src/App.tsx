import React, { FC } from 'react';
import useNetwork from './hooks/useNetwork';

export const App: FC = () => {
    const handleOnlineChange = (online: boolean) => console.log(online ? 'Online' : 'Offline');
    type UseNetworkCallback = typeof handleOnlineChange;

    const isOnline = useNetwork<UseNetworkCallback>(handleOnlineChange);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <h1>{isOnline ? 'Online' : 'Offline'}</h1>
        </div>
    );
};
