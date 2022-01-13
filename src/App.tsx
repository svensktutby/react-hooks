import React, { FC, useState } from 'react';
import { useNotifications } from './hooks/useNotifications/useNotifications';

export const App: FC = () => {
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationBody, setNotificationBody] = useState('');
    const showNotification = useNotifications(notificationTitle, { body: notificationBody });

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <label style={{ display: 'block' }}>
                Title
                <input
                    type="text"
                    value={notificationTitle}
                    onChange={({ target: { value } }) => setNotificationTitle(value)}
                />
            </label>
            <label style={{ display: 'block' }}>
                Body
                <input
                    type="text"
                    value={notificationBody}
                    onChange={({ target: { value } }) => setNotificationBody(value)}
                />
            </label>
            <div>
                <button onClick={showNotification}>Show notification</button>
            </div>
        </div>
    );
};
