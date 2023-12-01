import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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
};

export const withError = Template.bind({});
withError.args = { error: 'error' };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
