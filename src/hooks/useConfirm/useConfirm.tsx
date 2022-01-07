export const useConfirm = (message: string, onConfirm: () => void, onCancel: () => void) => {
    return () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
};
