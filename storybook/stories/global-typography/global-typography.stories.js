import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/component-parts/content-wrapper';

import { WsuHeading } from '../../../packages/components';
import './global-typography.scss';

// Story Time
export default {
	title: 'Elements/Typography',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const AllFonts = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuHeading>Typography</WsuHeading>
			<WsuHeading tag="h1">h1 Montserrat ExtraBold 48px</WsuHeading>
			<WsuHeading tag="h2">h2 Montserrat Bold 36px </WsuHeading>
			<WsuHeading tag="h3">h3 Montserrat SemiBold 24px</WsuHeading>
			<WsuHeading tag="h4">h4 Montserrat SemiBold 18px</WsuHeading>

			<WsuHeading tag="h2">Font Weights</WsuHeading>
			<table className="font-weights">
				<tr>
					<th>Example Text</th>
					<th>Font Weight Value</th>
				</tr>
				<tr className="font-weight--black">
					<td>Win the day for Crimson and Gray!</td>
					<td>Black 900</td>
				</tr>
				<tr className="font-weight--extra-bold">
					<td>Win the day for Crimson and Gray!</td>
					<td>Extra-bold 800</td>
				</tr>
				<tr className="font-weight--bold">
					<td>Win the day for Crimson and Gray!</td>
					<td>Bold 700</td>
				</tr>
				<tr className="font-weight--semi-bold">
					<td>Win the day for Crimson and Gray!</td>
					<td>Semi-bold 600</td>
				</tr>
				<tr className="font-weight--medium">
					<td>Win the day for Crimson and Gray!</td>
					<td>Medium 500</td>
				</tr>
				<tr className="font-weight--regular">
					<td>Win the day for Crimson and Gray!</td>
					<td>Regular 400</td>
				</tr>
			</table>
		</ComponentWrapper>
	)
}