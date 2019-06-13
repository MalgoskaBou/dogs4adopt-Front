import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { NavComponent } from './HeaderComponent';

const stories = storiesOf('NavComponent', module);

stories.addDecorator(StoryRouter());

stories.add('Nav of page', () => <NavComponent />);
