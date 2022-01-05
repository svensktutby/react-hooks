import { useState } from 'react';

export const useTabs = <T,>(initialIndex: number, allTabs: T[]) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
