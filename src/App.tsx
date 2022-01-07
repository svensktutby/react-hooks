import React, { FC } from 'react';
import useConfirm from './hooks/useConfirm';

export const App: FC = () => {
    const deleteSomething = () => console.log('Something was deleted');
    const abortDeleting = () => console.log('Abort deleting');
    const confirmDelete = useConfirm('Are you sure?', deleteSomething, abortDeleting);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <button onClick={confirmDelete}>Delete something</button>
        </div>
    );
};
