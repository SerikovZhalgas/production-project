import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './DeprecatedArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface DeprecatedArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    sortOptions: SelectOption<ArticleSortField>[];
    orderOptions: SelectOption<SortOrder>[];
}

export const DeprecatedArticleSortSelector = (
    props: DeprecatedArticleSortSelectorProps,
) => {
    const { t } = useTranslation();
    const {
        className,
        sort,
        onChangeSort,
        order,
        onChangeOrder,
        sortOptions,
        orderOptions,
    } = props;

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};
