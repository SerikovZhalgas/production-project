import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from '../DeprecatedNavbar/DeprecatedNavbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface DeprecatedAuthNavbarProps {
    className?: string;
}

export const DeprecatedAuthNavbar = memo(
    ({ className }: DeprecatedAuthNavbarProps) => {
        const { t } = useTranslation();

        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('KazCode')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    },
);
