import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const List = Template.bind({});
List.args = {
    view: ArticleView.BIG,
};

export const Tiled = Template.bind({});
Tiled.args = {
    view: ArticleView.SMALL,
};
