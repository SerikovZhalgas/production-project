import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface DeprecatedThemeSwitcherProps {
    className?: string;
    onToggleHandler: () => void;
}

export const DeprecatedThemeSwitcher = memo(
    ({ className, onToggleHandler }: DeprecatedThemeSwitcherProps) => {
        return (
            <Button
                className={classNames('', {}, [className])}
                onClick={onToggleHandler}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={ThemeIcon} width={40} height={40} inverted />
            </Button>
        );
    },
);
