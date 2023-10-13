import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args as object} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Kazakhstan,
            lastname: 'Serikov',
            first: 'asd',
            city: 'asf',
            currency: Currency.KZT,
            avatar: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_2714%2Cy_1894/MTk5ODY3Mzc2MzI0MzIyOTQ0/stephen-curry.jpg',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Kazakhstan,
            lastname: 'Serikov',
            first: 'asd',
            city: 'asf',
            currency: Currency.KZT,
            avatar: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_2714%2Cy_1894/MTk5ODY3Mzc2MzI0MzIyOTQ0/stephen-curry.jpg',
        },
    },
})];
