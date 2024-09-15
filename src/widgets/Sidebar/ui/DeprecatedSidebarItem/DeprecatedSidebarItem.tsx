import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './DeprecatedSidebarItem.module.scss';

interface DeprecatedSidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const DeprecatedSidebarItem = memo(
    ({ item, collapsed }: DeprecatedSidebarItemProps) => {
        const { t } = useTranslation();

        return (
            <AppLinkDeprecated
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(
                    cls.item,
                    { [cls.collapsed]: collapsed },
                    [],
                )}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLinkDeprecated>
        );
    },
);
