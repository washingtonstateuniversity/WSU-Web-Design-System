import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Component Imports
import { WsuArticle } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Article',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const DefaultArticle = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<WsuArticle />
		</ComponentWrapper>
	)
}