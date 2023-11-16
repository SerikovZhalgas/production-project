import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите страну')}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
