import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const List = Template.bind({});
List.args = {
    view: ArticleView.BIG,
};

export const Tiled = Template.bind({});
Tiled.args = {
    view: ArticleView.SMALL,
};
