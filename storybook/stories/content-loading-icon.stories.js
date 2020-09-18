// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Component Deps
import { WsuLoadingIcon } from '../../packages/components';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Story Time
export default {
	title: 'Components/Content/Loading Icon',
	parameters: {
		status: 'Needs Feedback' // In Development | Needs Feedback | Stable | Needs Deployment
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const defaultIcon = () => <ComponentWrapper layout="centered" ><WsuLoadingIcon /></ComponentWrapper>;