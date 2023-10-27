import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments?: Comment[];
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            className={cls.comment}
                            comment={comment}
                        />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
