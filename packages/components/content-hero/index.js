// External Deps
import React, { Component } from 'react';

import { getVerticalSpacingClasses, getMarginSpacingClasses } from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';

import './style.scss';

class ContentHero extends Component {

	
	render() {

		let TitleTag             = ( 'default' != this.props.titleTag ) ? this.props.titleTag : 'div';
		let containerBaseClasses = ['wsu-c-hero__container'];
		let wrapperBaseClasses   = ['wsu-c-hero__wrapper','wsu-u-no-js','wsu-c-full-width',this.props.className];
		let wrapperClasses       = wrapperBaseClasses.concat( getMarginSpacingClasses( this.props ) ); // leaving empty for now
		let containerClasses     = containerBaseClasses.concat( getVerticalSpacingClasses( this.props ) );

		return (

			<div className={ wrapperClasses.join(' ') }>
				<div className={ containerClasses.join(' ') } style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
					<div className="wsu-c-hero__content">
						{this.props.title && <TitleTag className="wsu-c-hero__title">{this.props.title}</TitleTag>}
						{this.props.subtitle && <div className="wsu-c-hero__subtitle">{this.props.subtitle}</div>}
						{this.props.caption && <div className="wsu-c-hero__caption">{this.props.caption}</div>}
						{this.props.buttonText && <a href="{this.props.buttonUrl}" className="wsu-c-hero__button">{this.props.buttonText}</a>}
					</div>
					{this.props.imageCaption && <p className="wsu-c-hero__image-caption">
						{this.props.imageCaptionUrl ? <a href={this.props.imageCaptionUrl}>{this.props.imageCaption}</a> : this.props.imageCaption }
					</p>}
				</div>
			</div> 
		);
	}
}

ContentHero.defaultProps = {
	title: '',
	titleTag: 'div',
	subtitle: '',
	caption: '', 
	buttonText: '',
	buttonUrl: '',
	imageCaption: '',
	imageCaptionUrl: '',
	style: 'default',
	verticalSpacing: 'default',
	marginBefore: 'default',
	marginAfter: 'default',
	className:''
}

export default ContentHero;