import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { updateFeatureFlagsMutation } from '..';
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

        try {
            await dispatch(
                updateFeatureFlagsMutation({
                    userId,
                    features: {
                        ...getAllFeatureFlags(),
                        ...newFeatures,
                    },
                }),
            );

            window.location.reload();
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
