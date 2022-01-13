import React, { FC } from 'react';
import useAxios from './hooks/useAxios';

const url = 'https://yts.mx/api/v2/list_movies.json';

export const App: FC = () => {
    const { loading, error, data, refetch } = useAxios(url);

    console.log({ loading, error, data });
    return (
        <div className="app" style={{ width: 600, margin: '0 auto' }}>
            <h1>{data && data.status}</h1>
            {error && <h2 style={{ color: 'coral' }}>{error.message}</h2>}
            <h2>{loading ? 'Loading...' : 'Loading finished'}</h2>
            <p>
                <b>Movie count:</b>&nbsp;{data && data.data.data.movie_count}
            </p>

            <button onClick={refetch}>Reload data</button>
        </div>
    );
};
