import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from '@/shared/ui/deprecated/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const { className, value, onChangeType } = props;

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
