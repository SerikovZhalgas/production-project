import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line prod-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUserName/modal/slice/loginSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line prod-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetails';
// eslint-disable-next-line prod-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addComentForm/model/slice/addCommentFormSlice';
// eslint-disable-next-line prod-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';
// eslint-disable-next-line prod-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
