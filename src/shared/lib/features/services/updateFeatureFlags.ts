import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFLags, updateFeatureFlagsMutation } from '..';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>(
    'articleDetails/updateFeatureFlag',
    async ({ newFeatures, userId }, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;

        const allFeatures = {
            ...getAllFeatureFlags(),
            ...newFeatures,
        };

        try {
            await dispatch(
                updateFeatureFlagsMutation({
                    userId,
                    features: allFeatures,
                }),
            );

            setFeatureFLags(allFeatures);

            return undefined;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
