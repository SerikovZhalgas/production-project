import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { SuspenceDecorator } from '../../src/shared/config/storybook/SuspenceDecorator/SuspenceDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'dark',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
            { name: 'orange', class: ['app', Theme.ORANGE], color: '#ffb005' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
addDecorator(SuspenceDecorator);
