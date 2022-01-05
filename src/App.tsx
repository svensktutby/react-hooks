import React, { FC } from 'react';
import { useInput } from './hooks/useInput/useInput';

export const App: FC = () => {
    const checkMaxLength = (value: string) => value.length <= 10;
    const checkAt = (value: string) => !value.includes('@', 1);
    const name = useInput('Mr.', checkMaxLength);
    const email = useInput('@', checkAt);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <input type="text" placeholder="Name" {...name} />
            <input type="text" placeholder="Email" {...email} />
        </div>
    );
};
