import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticlesId } from '../../services/fetchCommentsByArticlesId/fetchCommentsByArticlesId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const {
            dispatch, rejectWithValue, extra, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticlesId(article?.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
