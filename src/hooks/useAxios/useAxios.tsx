import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

type UseAxiosState = {
    loading: boolean;
    error: null | AxiosError;
    data: null | AxiosResponse;
};

export const useAxios = (url: string, config?: AxiosRequestConfig, axiosInstance = axios) => {
    const [state, setState] = useState<UseAxiosState>({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    };

    useEffect(() => {
        axiosInstance(url)
            .then((data) =>
                setState({
                    ...state,
                    data,
                    loading: false,
                }),
            )
            .catch((error) =>
                setState({
                    ...state,
                    error,
                    loading: false,
                }),
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    return { ...state, refetch };
};
