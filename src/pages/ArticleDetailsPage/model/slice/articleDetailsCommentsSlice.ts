import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchCommentsByArticlesId } from '../services/fetchCommentsByArticlesId/fetchCommentsByArticlesId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDetailsPage?.comments || commentAdapter.getInitialState(),
);

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticlesId.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticlesId.fulfilled,
                (
                    state,
                    action: PayloadAction<Comment[]>,
                ) => {
                    state.isLoading = false;
                    commentAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticlesId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
