import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '../../model/types/currency';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    value: Currency.KZT,
};

export const PrimaryReadonly = Template.bind({});
PrimaryReadonly.args = {
    value: Currency.KZT,
    readonly: true,
};
