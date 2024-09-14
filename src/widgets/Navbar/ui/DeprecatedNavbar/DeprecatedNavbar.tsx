import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUserName';
import cls from './DeprecatedNavbar.module.scss';

interface DeprecatedNavbarProps {
    className?: string;
    onShowModal: () => void;
    onCloseModal: () => void;
    isAuthModal: boolean;
}

export const DeprecatedNavbar = memo((props: DeprecatedNavbarProps) => {
    const { className, isAuthModal, onShowModal, onCloseModal } = props;
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
