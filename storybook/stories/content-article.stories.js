import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Imports
import { Article } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Article',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const DefaultArticle = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : false;
 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<Article/>
		</ComponentWrapper>
	)
}