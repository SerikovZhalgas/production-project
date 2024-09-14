import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <>
            <div>blabla</div>
            <div>blabla</div>
            <div>blabla</div>
        </>
    ),
    trigger: (
        <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    ),
};
