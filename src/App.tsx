import React, { FC } from 'react';
import useTabs from './hooks/useTabs';

const fetchContent = [
    {
        tab: 'Part 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        tab: 'Part 2',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
];

export const App: FC = () => {
    const { currentItem, changeItem } = useTabs(0, fetchContent);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            {fetchContent?.map(({ tab }, idx) => (
                <button key={idx} onClick={() => changeItem(idx)}>
                    {tab}
                </button>
            ))}
            <div>{currentItem.text}</div>
        </div>
    );
};
