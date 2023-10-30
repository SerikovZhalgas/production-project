import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
        { value: '12345', content: 'Третий пункт' },
    ],
    value: '123',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
        { value: '12345', content: 'Третий пункт' },
    ],
    value: '123',
    readonly: true,
};

export const DirectionTop = Template.bind({});
DirectionTop.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
        { value: '12345', content: 'Третий пункт' },
    ],
    value: '123',
    direction: 'top',
};
