// eslint-disable-next-line prod-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFLags } from '@/shared/lib/features';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFLags(features);
        return <StoryComponent />;
    };
