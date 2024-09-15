import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { DeprecatedLangSwitcher } from '../DeprecatedLangSwitcher/DeprecatedLangSwitcher';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={
                <Button
                    variant="clear"
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </Button>
            }
            off={<DeprecatedLangSwitcher toggle={toggle} />}
        />
    );
});
