import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
    } = props;

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <HStack
            wrap="wrap"
            gap="16"
            className={classNames(cls.ArticleListRedesigned, {}, [])}
            data-testid="ArticleList"
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </HStack>
    );
});
