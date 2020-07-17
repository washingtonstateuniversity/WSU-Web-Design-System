import React, { Component } from 'react';

import './style.scss';

import WsuAccordions from './component.js';

class ContentAccordion extends Component {

	componentDidMount() {
		
		let accordion = new WsuAccordions('.wsu-c-accordion');

	}

	render() {

		return (
			<div className="wsu-c-accordion">
				<h2 className="wsu-c-accordion__title" >{this.props.title}</h2>
				<div className="wsu-c-accordion__content">
					{this.props.children}
				</div>
			</div>
		);
	}

	static defaultProps = {
		title: '',
	}
}

export default ContentAccordion;