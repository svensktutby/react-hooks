import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: string, validator?: (value: string) => boolean) => {
    const [value, setValue] = useState(initialValue);
    let willUpdate = true;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (typeof validator === 'function') willUpdate = validator(value);
        if (willUpdate) setValue(event.target.value);
    };

    return { value, onChange };
};
