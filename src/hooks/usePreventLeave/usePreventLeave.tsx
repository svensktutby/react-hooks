export const usePreventLeave = () => {
    const listener = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = false;
    };

    const disablePrevent = () => window.removeEventListener('beforeunload', listener);
    const enablePrevent = () => window.addEventListener('beforeunload', listener);

    return { disablePrevent, enablePrevent };
};
