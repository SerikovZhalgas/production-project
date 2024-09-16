import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './DeprecatedArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface DeprecatedArticlesPageProps {
    className?: string;
    onLoadNextPart: () => void;
}

export const DeprecatedArticlesPage = memo(
    (props: DeprecatedArticlesPageProps) => {
        const { className, onLoadNextPart } = props;
        return (
            <Page
                data-testid="ArticlesPage"
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
                <ArticlePageGreeting />
            </Page>
        );
    },
);
