import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

interface DeprecatedLangSwitcherProps {
    className?: string;
    short?: boolean;
    toggle: () => void;
}

export const DeprecatedLangSwitcher = memo(
    ({ className, short, toggle }: DeprecatedLangSwitcherProps) => {
        const { t } = useTranslation();
        return (
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    },
);
