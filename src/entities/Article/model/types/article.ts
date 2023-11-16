import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface ArticleBLockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBLock extends ArticleBLockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBLock extends ArticleBLockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBLock extends ArticleBLockBase {
    type: ArticleBlockType.TEXT;
    title?: string
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBLock | ArticleImageBLock | ArticleTextBLock

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
