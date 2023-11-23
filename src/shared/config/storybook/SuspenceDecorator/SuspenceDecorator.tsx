// eslint-disable-next-line prod-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenceDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
