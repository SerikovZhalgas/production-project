import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem, delegates doloremque eligendi fugiat harum natus nostrum porro qui quia quibusdam tempore voluptuous! Beatae consequuntur dolorum eaque fuga ipsa similique.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem, delegates doloremque eligendi fugiat harum natus nostrum porro qui quia quibusdam tempore voluptuous! Beatae consequuntur dolorum eaque fuga ipsa similique.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
