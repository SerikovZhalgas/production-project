import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        onChangeSort,
        onChangeSearch,
        sort,
        search,
        onChangeType,
        type,
        onChangeOrder,
        order,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            type={type}
            onChangeType={onChangeType}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            order={order}
            search={search}
            sort={sort}
            className={className}
        />
    );
});
