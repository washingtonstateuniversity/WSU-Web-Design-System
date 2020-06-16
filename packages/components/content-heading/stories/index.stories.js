import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

import ContentHeading from '../index';
import {ContentContainer} from '../../containers/index';
import P from '../../content-paragraph/index';

// Story Time
export default {
	title: 'Content Heading',
	decorators: [
		withA11y,
		withKnobs
	]
};

const contentGroupID = 'Preview';
const optionsGroupID = 'Options';

const headingTagOptions = {
	h1:'h1',
	h2:'h2',
	h3:'h3',
	h4:'h4',
	h5:'h5',
	h6:'h6',
};

const headingLengthOptions = {
	short:'short', 
	medium:'medium',
	long:'long',
	extraLong:'extra long',
}

const headingStyleOptions = {
	default:'default', 
	callout:'callout',
}

const headingWidthOptions = ['full','wide','medium','narrow'];

const getHeadingLength = ( headingLength ) => {

	let heading = '';

	switch ( headingLength ) {
		case 'extra long':
			heading = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec ut Lacinia turpis. Nam commodo elit eget varius ultricies. Nunc bibendum in libero nec egestas';
			break;
		case 'long':
			heading = 'Lorem Ipsum Dolor sit Amet, Consectetur Adipiscing Elit.';
			break;
		case 'medium':
			heading ='Lorem Ipsum Dolor sit Amet';
			break;
	}

	return heading;

}

export const DefaultHeading = () => {

	let applyContentClass = boolean('Apply wsu-c-content class', false, contentGroupID );

	let classes = ( boolean('Apply wsu-c-content class', false, contentGroupID ) ) ? ['wsu-c-content'] : '';

	return(
		<ContentContainer className={classes}>
			<ContentHeading 
				tag={ select('tag', headingTagOptions, 'h1', optionsGroupID ) }
				name={ text( 'name','', optionsGroupID ) }
				link={ text( 'link','', optionsGroupID ) }
				style={ select('style', headingStyleOptions, 'default', optionsGroupID )  }
				width={ select('width', headingWidthOptions, 'full', optionsGroupID )  }
				>
				Heading Text {getHeadingLength( select('Heading Length', headingLengthOptions,'short', contentGroupID ) )}
			</ContentHeading>
		</ContentContainer>
	)
}

export const AllHeadings = () => {

	let headingLength = select( 'Heading Length', headingLengthOptions,'short', contentGroupID );
	let style         = select( 'style', headingStyleOptions, 'default', optionsGroupID );
	let width         = select( 'width', headingWidthOptions, 'full', optionsGroupID );

	return(
		<ContentContainer className={'wsu-c-content'}>
			<ContentHeading tag="h1" style={style} width={width} >Heading Level 1 {getHeadingLength( headingLength ) }</ContentHeading>
			<ContentHeading tag="h2" style={style} width={width} >Heading Level 2 {getHeadingLength( headingLength ) }</ContentHeading>
			<ContentHeading tag="h3" style={style} width={width} >Heading Level 3 {getHeadingLength( headingLength ) }</ContentHeading>
			<ContentHeading tag="h4" style={style} width={width} >Heading Level 4 {getHeadingLength( headingLength ) }</ContentHeading>
			<ContentHeading tag="h5" style={style} width={width} >Heading Level 5 {getHeadingLength( headingLength ) }</ContentHeading>
			<ContentHeading tag="h6" style={style} width={width} >Heading Level 6 {getHeadingLength( headingLength ) }</ContentHeading>
		</ContentContainer>
	)
};

export const WithParagraphs = () => {

	let headingLength = select('Heading Length', headingLengthOptions,'short', contentGroupID );
	let style         = select( 'style', headingStyleOptions, 'default', optionsGroupID );
	let width         = select( 'width', headingWidthOptions, 'full', optionsGroupID );

	return(
		<ContentContainer className={'wsu-c-content'}>
			<ContentHeading tag="h1" width={width} style={style}>Heading Level 1 {getHeadingLength( headingLength ) }</ContentHeading>
			<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</P>
			<ContentHeading tag="h2" width={width} style={style}>Heading Level 2 {getHeadingLength( headingLength ) }</ContentHeading>
			<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</P>
			<ContentHeading tag="h3" width={width} style={style} >Heading Level 3 {getHeadingLength( headingLength ) }</ContentHeading>
			<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</P>
			<ContentHeading tag="h4" width={width} style={style}>Heading Level 4 {getHeadingLength( headingLength ) }</ContentHeading>
			<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</P>
			<ContentHeading tag="h5" width={width} style={style} >Heading Level 5 {getHeadingLength( headingLength ) }</ContentHeading>
			<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</P>
			<ContentHeading tag="h6" width={width} style={style} >Heading Level 6 {getHeadingLength( headingLength ) }</ContentHeading>
			<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</P>
		</ContentContainer>
	)
};
