import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarIcon from 'shared/assets/test/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

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
        avatar: AvatarIcon,
    },
};

export const withError = Template.bind({});
withError.args = { error: 'error' };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
