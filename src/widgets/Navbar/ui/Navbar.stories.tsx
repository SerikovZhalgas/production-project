import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: {
        authData: {
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLTYUJxG8Hu036PQ_TXpMLq2fG8Kj8NZI4h0lbn_3g=s900-c-k-c0x00ffffff-no-rj',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: {
        authData: {
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLTYUJxG8Hu036PQ_TXpMLq2fG8Kj8NZI4h0lbn_3g=s900-c-k-c0x00ffffff-no-rj',
        },
    },
})];
