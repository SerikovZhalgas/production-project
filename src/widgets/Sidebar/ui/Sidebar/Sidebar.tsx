import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ToggleFeatures } from '@/shared/lib/features';
import { DeprecatedSidebar } from '../DeprecatedSidebar/DeprecatedSidebar';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={cls.appLogo}
                    />
                    <VStack role="navigation" gap="8" className={cls.items}>
                        {itemList}
                    </VStack>
                    <Icon
                        Svg={ArrowIcon}
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapsedBtn}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            }
            off={
                <DeprecatedSidebar
                    className={className}
                    onToggle={onToggle}
                    collapsed={collapsed}
                    itemList={itemList}
                />
            }
        />
    );
});
