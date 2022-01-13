type Permission = 'granted' | 'denied' | 'default';

const GRANTED: Permission = 'granted';

export const useNotifications = (title: string, options?: Record<string, unknown>) => {
    if (!('Notification' in window)) return;

    return () => {
        if (Notification.permission !== GRANTED) {
            Notification.requestPermission().then((permission) => {
                if (permission === GRANTED) {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
};
