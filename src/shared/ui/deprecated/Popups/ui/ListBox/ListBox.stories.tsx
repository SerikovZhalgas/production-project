import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
    value: '123',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
    value: '123',
    readonly: true,
};

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
    value: '123',
    direction: 'top left',
};

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
    value: '123',
    direction: 'top right',
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
    value: '123',
    direction: 'bottom left',
};

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
    defaultValue: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
    value: '123',
    direction: 'bottom right',
};
