import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import { WsuBlockquote } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Blockquote',
	parameters: {
		status: 'Needs Feedback' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuBlockquote
};

export const Default = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return(
		<ComponentWrapper layout={layout} className={classes}>
			<WsuBlockquote
				cite={text( 'cite','Lorem ipsum dolor sit amet', optionsGroupID )}
				citeUrl={text( 'citeUrl','https://wsu.edu', optionsGroupID )}
				name={text( 'name','Lorem ipsum', optionsGroupID )}
				title={text( 'title','Consectetur adipiscing elit', optionsGroupID )}
				citeAlign={ select( 'citeAlign',['default','center','right'],'default', optionsGroupID )  }
				textSize={select( 'textSize',['default','xsmall','small','medium','medium-large','large'],'default', optionsGroupID )}
				width={select( 'width',['default','small','medium','large','full'],'default', optionsGroupID )}
				>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit congue lacinia. Nulla sed ex pellentesque, dignissim mi vel, interdum sapien. 
				Morbi facilisis vel velit sit amet malesuada. Donec id pharetra diam. Ut egestas tellus non euismod varius. Donec eget augue est. 
				Donec sapien justo, bibendum nec metus at, placerat aliquet sapien. Suspendisse interdum mi nibh, tincidunt egestas nisi auctor id.
				 Nunc ante lectus, accumsan vitae volutpat in, varius vitae justo.
			</WsuBlockquote>
		</ComponentWrapper>
	)
}

