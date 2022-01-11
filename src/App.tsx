import React, { FC } from 'react';
import { useFadeIn } from './hooks/useFadeIn/useFadeIn';

export const App: FC = () => {
    const titleFadeInProps = useFadeIn<HTMLHeadingElement>(3, 1);
    const paragraphFadeInProps = useFadeIn<HTMLHeadingElement>(2, 2);

    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <h1 {...titleFadeInProps}>Title</h1>
            <p {...paragraphFadeInProps}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque debitis ex, incidunt ipsum iusto
                magnam molestias quis quo quod ratione reiciendis soluta totam. Ad itaque iusto placeat possimus quos.
            </p>
        </div>
    );
};
