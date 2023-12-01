import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const WithoutHref = Template.bind({});
WithoutHref.args = {
    item: {
        id: '1',
        title: 'Title',
        description: 'Description',
        href: '',
    },
};

export const WithHref = Template.bind({});
WithHref.args = {
    item: {
        id: '1',
        title: 'Title',
        description: 'Description',
        href: 'http://localhost:3000/articles/7',
    },
};
