// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Deps
import { WsuSiteNavVertical } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Site/Navigation/Vertical',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const Default = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<>
			<WsuSiteNavVertical />

			<ComponentWrapper layout={layout} className={classes} type="notice">
				<p>Currently looking into moving to the split-button navigation pattern. We <strong>do not</strong> recommend implementing in custom projects until the next iteration is available.</p>
			</ComponentWrapper>
		</>
	)
}