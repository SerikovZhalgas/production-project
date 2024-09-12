import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';
import { typedMemo } from '@/shared/lib/typedMemo/typedMemo';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    key={opt.value}
                    value={opt.value}
                    className={cls.option}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <span className={cls.label}>{`${label}>`}</span>
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
