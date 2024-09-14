import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { DeprecatedAuthNavbar } from '../DeprecatedAuthNavbar/DeprecatedAuthNavbar';
import { DeprecatedNavbar } from '../DeprecatedNavbar/DeprecatedNavbar';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={<DeprecatedAuthNavbar />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <header className={classNames(cls.Navbar, {}, [className])}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                    {isAuthModal && (
                        <LoginModal
                            isOpen={isAuthModal}
                            onClose={onCloseModal}
                        />
                    )}
                </header>
            }
            off={
                <DeprecatedNavbar
                    isAuthModal={isAuthModal}
                    onCloseModal={onCloseModal}
                    onShowModal={onShowModal}
                />
            }
        />
    );
});
